import { NextRequest, NextResponse } from "next/server";

type Body = {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  useCase?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  consent?: string | boolean;

  successRedirect?: string;
  errorRedirect?: string;
};

type ContactMeta = {
  ip: string;
  userAgent: string;
  useCase?: string;
  budget?: string;
  timeline?: string;
  consent: boolean;
  submittedAt: string;
};

type NormalizedContact = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  meta: ContactMeta;
};

type ExternalResult = {
  ok: boolean;
  status: number;
  code?: string;
  error?: string;
  recordId?: string;
};

const FRONTEND_URL =
  process.env.FRONTEND_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.bespokeethos.com";

function sanitize(value: unknown): string {
  if (value == null) return "";
  return String(value).slice(0, 2000).trim();
}

function withCors(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", FRONTEND_URL);
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

function validationError(
  message: string,
  isFormPost: boolean,
  req: NextRequest,
  errorRedirect?: string,
) {
  const timestamp = new Date().toISOString();
  if (isFormPost) {
    const url = new URL(errorRedirect ?? "/contact?error=1", req.url);
    return withCors(NextResponse.redirect(url, { status: 303 }));
  }
  return withCors(
    NextResponse.json(
      { success: false, error: message, code: "VALIDATION_ERROR", timestamp },
      { status: 400 },
    ),
  );
}

export async function POST(req: NextRequest) {
  const forwardedFor = (req.headers.get("x-forwarded-for") || "").split(",")[0]?.trim();
  const requestIp = (req as { ip?: string | null }).ip ?? undefined;
  const ip = forwardedFor || requestIp || "unknown";

  const nowMs = Date.now();
  const bucket = getBucket(ip);
  if (bucket.count >= 10 && nowMs - bucket.ts < 60_000) {
    const timestamp = new Date().toISOString();
    const contentType = req.headers.get("content-type")?.toLowerCase() ?? "";
    const isFormPost =
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data");

    if (isFormPost) {
      const url = new URL("/contact?error=1", req.url);
      return withCors(NextResponse.redirect(url, { status: 303 }));
    }

    return withCors(
      NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again in a minute.",
          code: "RATE_LIMIT",
          timestamp,
        },
        { status: 429 },
      ),
    );
  }
  if (nowMs - bucket.ts >= 60_000) {
    bucket.count = 0;
    bucket.ts = nowMs;
  }
  bucket.count++;

  const contentType = req.headers.get("content-type")?.toLowerCase() ?? "";
  const isFormPost =
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data");

  let successRedirect: string | undefined;
  let errorRedirect: string | undefined;

  try {
    let data: Body;

    if (isFormPost) {
      const formData = await req.formData();
      successRedirect = sanitize(formData.get("successRedirect"));
      errorRedirect = sanitize(formData.get("errorRedirect"));

      data = {
        name: sanitize(formData.get("name")),
        email: sanitize(formData.get("email")),
        company: sanitize(formData.get("company")),
        useCase: sanitize(formData.get("useCase")),
        budget: sanitize(formData.get("budget")),
        timeline: sanitize(formData.get("timeline")),
        message: sanitize(formData.get("message")),
        consent: formData.get("consent")?.toString() ?? "",
        // captchaToken: sanitize(formData.get("cf-turnstile-response")),
      };
    } else {
      const json = (await req.json()) as Body;
      successRedirect = json.successRedirect;
      errorRedirect = json.errorRedirect;
      data = json;
    }

    // Optional: verify Cloudflare Turnstile


    const timestamp = new Date().toISOString();
    const userAgent = sanitize(req.headers.get("user-agent"));
    const email = sanitize(data.email);
    const phone = sanitize((data as Body).phone);
    const company = sanitize(data.company);
    const message = sanitize(data.message || "");
    const useCase = sanitize(data.useCase);
    const rawBudget = sanitize(data.budget);
    const budget = rawBudget || "Not sure yet";
    const timeline = sanitize(data.timeline);
    const consentFlag =
      typeof data.consent === "boolean"
        ? data.consent
        : Boolean(sanitize(data.consent));

    const firstNameRaw = sanitize((data as Body).firstName);
    const lastNameRaw = sanitize((data as Body).lastName);
    const fullName = sanitize(data.name);

    let firstName = firstNameRaw;
    let lastName = lastNameRaw;

    if (!firstName || !lastName) {
      const baseName = fullName || `${firstNameRaw} ${lastNameRaw}`.trim();
      if (baseName) {
        const parts = baseName.split(/\s+/);
        const firstPart = parts[0];
        const remaining = parts.slice(1).join(" ");
        if (!firstName && firstPart) {
          firstName = firstPart;
        }
        if (!lastName) {
          lastName = remaining || "(not provided)";
        }
      }
    }

    firstName = firstName || "(not provided)";
    lastName = lastName || "(not provided)";

    const errors: string[] = [];
    if (!firstName || firstName === "(not provided)") {
      errors.push("First name is required.");
    }
    if (!email) {
      errors.push("Email is required.");
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errors.push("Email address is invalid.");
      }
    }
    if (!message || message.length < 10) {
      errors.push("Message must be at least 10 characters.");
    }

    if (errors.length > 0) {
      return validationError(errors.join(" "), isFormPost, req, errorRedirect);
    }

    const contact: NormalizedContact = {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
      meta: {
        ip,
        userAgent,
        useCase,
        budget,
        timeline,
        consent: consentFlag,
        submittedAt: timestamp,
      },
    };

    console.log(
      "AIRTABLE_CONTACT_SUBMISSION",
      JSON.stringify({
        timestamp,
        email: contact.email,
        name: `${contact.firstName} ${contact.lastName}`.trim(),
        company: contact.company,
        useCase: contact.meta.useCase,
        timeline: contact.meta.timeline,
        budget: contact.meta.budget,
        ip: contact.meta.ip,
        userAgent: contact.meta.userAgent,
      }),
    );

    console.info(
      "[CONTACT_FORM_SUBMISSION] Normalized contact",
      JSON.stringify({
        timestamp,
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
        company: contact.company,
        meta: contact.meta,
      }),
    );

    const airtableResult = await sendToSimpleLog(contact);

    if (!airtableResult.ok) {
      const status = airtableResult.status ?? 500;
      const code = airtableResult.code || "AIRTABLE_ERROR";
      const errorMessage =
        airtableResult.error ||
        "We couldn't process your request right now. Please try again shortly.";

      console.error(
        "[CONTACT_FORM_SUBMISSION] External service failure",
        JSON.stringify({ code, status, error: errorMessage }),
      );

      if (isFormPost) {
        const url = new URL(errorRedirect ?? "/contact?error=1", req.url);
        url.searchParams.set("code", code);
        return withCors(NextResponse.redirect(url, { status: 303 }));
      }

      return withCors(
        NextResponse.json(
          { success: false, error: errorMessage, code, timestamp },
          { status },
        ),
      );
    }

    const successPayload = {
      success: true,
      message: "Contact form submitted successfully",
      recordId: airtableResult.recordId ?? null,
      timestamp,
    };

    if (isFormPost) {
      const url = new URL(successRedirect ?? "/contact?sent=1", req.url);
      return withCors(NextResponse.redirect(url, { status: 303 }));
    }

    return withCors(NextResponse.json(successPayload, { status: 200 }));
  } catch (error) {
    console.error("[CONTACT_FORM_SUBMISSION] Unexpected error", error);
    const timestamp = new Date().toISOString();

    if (isFormPost) {
      const url = new URL(errorRedirect ?? "/contact?error=1", req.url);
      return withCors(NextResponse.redirect(url, { status: 303 }));
    }

    return withCors(
      NextResponse.json(
        {
          success: false,
          error: "Invalid request payload.",
          code: "UNEXPECTED_ERROR",
          timestamp,
        },
        { status: 400 },
      ),
    );
  }
}

async function sendToSimpleLog(
  contact: NormalizedContact,
): Promise<ExternalResult> {
  console.info(
    "[CONTACT_FORM_SUBMISSION] Simple Log Submission",
    JSON.stringify({
      timestamp: contact.meta.submittedAt,
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone,
      company: contact.company,
      message: contact.message,
      meta: contact.meta,
    }),
  );

  // This function is a temporary placeholder to ensure the form works and returns success.
  // The data is logged to the console/Vercel logs for manual retrieval.
  return { ok: true, status: 200, recordId: "LOGGED" };
}

// Fallback handlers for non-POST
export async function GET() {
  return withCors(
    NextResponse.json({ error: "Method Not Allowed" }, { status: 405 }),
  );
}

export async function OPTIONS() {
  const res = new NextResponse(null, { status: 204 });
  res.headers.set("Access-Control-Allow-Origin", FRONTEND_URL);
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}

// naive per-IP bucket
const RATE: Map<string, { ts: number; count: number }> = new Map();
function getBucket(ip: string) {
  let b = RATE.get(ip);
  if (!b) {
    b = { ts: Date.now(), count: 0 };
    RATE.set(ip, b);
  }
  return b;
}
