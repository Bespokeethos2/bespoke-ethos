import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

type FsAction = "list" | "read" | "write";

type FsRequestBody =
  | { action: "list"; dir?: string }
  | { action: "read"; path: string }
  | { action: "write"; path: string; content: string };

const ALLOWED_ROOTS = ["src", "app", "tests"];

function getRootDir() {
  return process.cwd();
}

function resolveSafePath(relativePath: string) {
  const rootDir = getRootDir();
  const clean = relativePath.replace(/^([/\\])+/, "");
  const [top, ...rest] = clean.split(/[\\/]/);

  if (!ALLOWED_ROOTS.includes(top)) {
    throw new Error(
      `Path outside allowed roots. Allowed: ${ALLOWED_ROOTS.join(
        ", ",
      )}. Got: ${relativePath}`,
    );
  }

  const resolved = path.join(rootDir, top, ...rest);
  const normalizedRoot = path.join(rootDir, top) + path.sep;
  const normalizedResolved = path.join(resolved) + path.sep;

  if (!normalizedResolved.startsWith(normalizedRoot)) {
    throw new Error("Resolved path escapes allowed root.");
  }

  return resolved;
}

function requireAdminToken(req: NextRequest): boolean {
  const expected = (process.env.BRUTUS_ADMIN_TOKEN ?? "").trim();
  if (!expected) return false;

  const token =
    req.headers.get("x-brutus-admin-token") ??
    req.headers.get("x-brutus-admin") ??
    "";

  return token.trim() === expected;
}

export async function POST(req: NextRequest) {
  if (!requireAdminToken(req)) {
    return NextResponse.json(
      { ok: false, error: "Missing or invalid Brutus admin token." },
      { status: 401 },
    );
  }

  let body: FsRequestBody;

  try {
    body = (await req.json()) as FsRequestBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const action = (body as any)?.action as FsAction | undefined;

  if (!action || !["list", "read", "write"].includes(action)) {
    return NextResponse.json(
      { ok: false, error: "Invalid or missing `action`." },
      { status: 400 },
    );
  }

  try {
    if (action === "list") {
      const dirInput =
        (body as any)?.dir && typeof (body as any).dir === "string"
          ? (body as any).dir
          : "";

      if (!dirInput) {
        return NextResponse.json(
          { ok: true, roots: ALLOWED_ROOTS },
          { status: 200 },
        );
      }

      const dirPath = resolveSafePath(dirInput);
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      return NextResponse.json(
        {
          ok: true,
          dir: dirInput,
          entries: entries.map((e) => ({
            name: e.name,
            type: e.isDirectory() ? "dir" : "file",
          })),
        },
        { status: 200 },
      );
    }

    if (action === "read") {
      const filePath = typeof (body as any).path === "string" ? (body as any).path : "";
      if (!filePath) {
        return NextResponse.json(
          { ok: false, error: "`path` is required for read." },
          { status: 400 },
        );
      }

      const resolved = resolveSafePath(filePath);
      const content = await fs.readFile(resolved, "utf8");

      return NextResponse.json(
        { ok: true, path: filePath, content },
        { status: 200 },
      );
    }

    if (action === "write") {
      const filePath = typeof (body as any).path === "string" ? (body as any).path : "";
      const content = typeof (body as any).content === "string" ? (body as any).content : undefined;

      if (!filePath || content === undefined) {
        return NextResponse.json(
          { ok: false, error: "`path` and `content` are required for write." },
          { status: 400 },
        );
      }

      const resolved = resolveSafePath(filePath);
      await fs.writeFile(resolved, content, "utf8");

      return NextResponse.json(
        { ok: true, path: filePath },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { ok: false, error: "Unsupported action." },
      { status: 400 },
    );
  } catch (error: any) {
    console.error("[BRUTUS_FS] Error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Filesystem operation failed.",
        details: typeof error?.message === "string" ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}

