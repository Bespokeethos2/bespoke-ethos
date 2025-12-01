# Bespoke Ethos Homepage SEO Guide

Last updated: 2025-12-01

This file captures the current SEO strategy and key positioning for the homepage so future edits stay aligned and don’t drift back into narrow, proprietary terms.

---

## Core Positioning (from Market Research)

- **Audience:** Small business founders / lean teams, especially in Cleveland / Midwest, overwhelmed and in “survival mode.”
- **Category:** AI consulting + workflow automation for small businesses (not generic “AI tools” and not enterprise consulting).
- **Key Differentiators:**
  - Founder is a **Tool & Die technician** (blue‑collar credibility, Rust Belt positioning).
  - Former **AI trainer (Appen)** – “trained the models everyone is using.”
  - **Productized consulting** instead of hourly: fixed‑scope, fixed‑price projects starting around **$997**.
  - **NGLCC‑certified LGBTQ‑owned** business with a **25% discount for LGBTQ‑owned small businesses**.
  - Human‑in‑the‑loop, practical, vendor‑agnostic (Zapier, Make.com, GPT, Claude, Gemini, etc.).

---

## Homepage SEO Objectives

1. **Target broad, high‑intent queries** around:
   - `AI consulting`
   - `AI consulting for small business`
   - `AI automation consulting`
   - `workflow automation consulting`
   - `small business automation`
   - `Zapier consultant` / `Make.com consultant`
   - `Cleveland AI consulting`
2. **Avoid** leading with proprietary product names (Cadence, Consensus Engine, Flowstack, etc.) in:
   - `<title>`
   - meta description
   - topmost headings (H1/H2)
   - JSON‑LD `name`
3. Keep product names and “fancy” language **deeper in the page** for humans, not primary for search.

---

## Recommended Metadata (src/app/page.tsx)

```ts
export const metadata: Metadata = {
  title: "AI Automation Consulting for Small Businesses in Cleveland | Bespoke Ethos",
  description:
    "AI consulting and workflow automation for small businesses. Bespoke Ethos helps founders in Cleveland and beyond fix broken Zapier/Make automations, design AI workflows, and ship fixed-price projects starting at $997.",
  keywords: [
    "AI consulting",
    "AI consulting for small business",
    "AI automation consulting",
    "workflow automation consulting",
    "small business automation",
    "Zapier consultant",
    "Make.com consultant",
    "Cleveland AI consulting",
    "small business AI strategy",
    "AI implementation for small business",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "AI Automation Consulting for Small Businesses in Cleveland | Bespoke Ethos",
    description:
      "AI consulting and workflow automation for small businesses. Get help fixing Zapier/Make automations, designing AI workflows, and launching fixed-price automation projects from $997.",
    images: [
      {
        url: "/assets/generated/logo-square-dark.png",
        width: 1200,
        height: 630,
        alt: "Bespoke Ethos orange square logo",
      },
    ],
  },
};
```

**JSON‑LD alignment (`HomePageJsonLd`):**

```ts
name: "AI Automation Consulting for Small Businesses in Cleveland | Bespoke Ethos",
```

---

## Above‑the‑Fold Copy Guidance

- Ensure the **H1** (inside the hero component) clearly supports the broad category:
  - Example direction: “AI automation for overwhelmed small business founders.”
- Add an early **visible H2** and paragraph (directly under the hero) that repeats broad terms and differentiators in plain language, e.g.:

```tsx
<section className="py-8">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-xl font-semibold text-slate-900 font-hero-accent">
      AI consulting and workflow automation for small businesses.
    </h2>
    <p className="mt-3 text-slate-600">
      Bespoke Ethos is a Cleveland-based AI consulting firm led by a Tool &amp; Die technician and former AI trainer. We help small
      businesses escape broken Zapier and Make.com workflows, design practical AI automations, and launch fixed-price projects starting
      at $997.
    </p>
  </div>
</section>
```

---

## Copy Do/Don’t Rules

**Do:**
- Use broad, generic service language in key places:
  - “AI consulting for small businesses”
  - “workflow automation consulting”
  - “Zapier and Make.com automation troubleshooting”
  - “AI implementation and strategy for founders”
- Mention geographic and trust signals once near the top:
  - “Cleveland‑based”
  - “NGLCC‑certified LGBTQ‑owned consultancy”
  - “Tool & Die technician and former AI trainer”

**Don’t:**
- Put proprietary product names or internal brand jargon in:
  - `<title>`
  - meta description
  - JSON‑LD `name`
  - the first H1/H2.
- Lead with “cute” taglines in SEO surfaces (keep them in hero subcopy instead).

---

## When Updating the Homepage

Before changing hero copy, metadata, or top-of-page sections:
- Check changes against:
  - Target queries list
  - Positioning bullets above
- Keep at least:
  - 1x mention of "AI consulting for small businesses"
  - 1x mention of "workflow automation" / "automation consulting"
  - 1x geographic/identity marker (Cleveland + LGBTQ-owned / NGLCC)

---

## Keyword Map for Homepage

**Primary keyword (one per page):**
- `AI consulting for small business`

**Secondary keywords (sprinkle naturally in H2s/body):**
- `AI automation consulting`
- `workflow automation consulting`
- `small business automation`
- `AI workflows for small business`
- `Zapier consultant`, `Make.com consultant`
- `Cleveland AI consulting`, `Cleveland small business consulting`

**Supporting phrases (use conversationally, not stuffed):**
- “AI implementation for small businesses”
- “AI strategy for founders”
- “fixing broken automations / Zapier / Make.com”
- “automating repetitive back-office tasks”

Avoid repeating the exact same phrase unnaturally; aim for semantic variety around this cluster.

---

## Meta Tags & Head Tags Checklist

Next.js handles most boilerplate, but conceptually the homepage should cover:

1. **Basic meta**
   - `charset="utf-8"` (handled globally)
   - `viewport="width=device-width, initial-scale=1"` (global)
   - `meta name="robots" content="index,follow,max-image-preview:large"`  
     - For Next.js, confirm `robots.ts` or metadata config effectively allows indexing.

2. **SEO-critical meta (via `metadata`):**
   - `<title>`: unique, ~50–60 characters, includes:
     - “AI consulting for small businesses”
     - “Cleveland” once for geo
   - `meta name="description"`: ~140–160 characters, benefits + who it’s for.

3. **Canonical & alternates**
   - `alternates: { canonical: "/" }` in `metadata` (already included).
   - No conflicting canonicals in other SEO components.

4. **Open Graph / Social meta**
   - `og:type="website"`
   - `og:title` ≈ `<title>` but can be slightly more benefit-focused.
   - `og:description` aligned with meta description.
   - `og:image` set to a 1200×630+ branded image.
   - `og:url` = `siteUrl`.

5. **Twitter Card**
   - `twitter:card="summary_large_image"` (set globally).
   - Optional: `twitter:title`, `twitter:description`, `twitter:image` mirroring OG.

---

## Structured Data / Schema.org

Homepage should have:

1. **WebPage JSON-LD (already present)**
   - `@type: "WebPage"`
   - `name` aligned with the SEO title:
     - `"AI Automation Consulting for Small Businesses in Cleveland | Bespoke Ethos"`
   - `url` = homepage URL.

2. **FAQPage JSON-LD (already present)**
   - `@type: "FAQPage"`
   - `mainEntity` array with:
     - `"@type": "Question"`
     - `name`: the question text.
     - `acceptedAnswer.text`: concise 1–2 sentence summary first, then optional detail.
   - Make sure the on-page FAQ content matches the structured data text.

3. **Organization / LocalBusiness JSON-LD**
   - Defined elsewhere in the app (SEO components); ensure:
     - `@type` includes either `Organization` or `LocalBusiness` with:
       - Name: `Bespoke Ethos`
       - `url`: homepage URL
       - `address` / `areaServed`: Cleveland / Midwest if present
       - `sameAs`: key profiles if/when ready (LinkedIn, etc.)
     - Reference homepage `@id` consistently between `WebPage` and organization schema.

---

## On-Page Content & Heading Structure

**H1 (inside hero component):**
- One per page.
- Should clearly describe:
  - What you do: AI consulting / automation.
  - For whom: small businesses / founders.
  - Optional: locality (“in Cleveland”) if it fits naturally.

Example direction:
- “AI automation consulting for overwhelmed small business founders.”

**H2s:**
- Use H2s for major sections; weave in secondary keywords:
  - “How AI automation helps small businesses escape busywork”
  - “Workflow automation services for small business founders”
  - “Why small businesses in Cleveland work with Bespoke Ethos”

**Body copy:**
- Lead with clear, concrete benefits:
  - Removing busywork, fixing broken automations, reducing errors, avoiding enterprise retainers.
- Fold differentiators into plain language:
  - “Tool & Die technician and former AI trainer”
  - “NGLCC‑certified LGBTQ‑owned small business”
  - “Fixed‑price projects starting at $997”

Keep paragraphs scannable (2–4 sentences) and avoid jargon where not necessary.

---

## Internal Linking Strategy

From the homepage:
- Link to **Contact** with anchor text like:
  - “schedule an AI automation consultation”
  - “talk to an AI consultant”
- Link to **Pricing** using:
  - “AI consulting pricing for small businesses”
- Link to key offer pages (Flowstack, etc.) using generic descriptors:
  - “workflow automation setup for small businesses”
  - “AI strategy sprint for founders”

From other pages:
- Link back to the homepage occasionally with:
  - “Bespoke Ethos AI consulting”
  - “AI automation for small businesses in Cleveland”

Avoid using “click here” as the only anchor text.

---

## Images & Media SEO

- Use **descriptive filenames** for new images (e.g., `founder-upton-rand-tool-and-die.jpg`).
- Set meaningful `alt` text:
  - Describe the image and, where natural, include a relevant phrase like “AI consultant for small businesses in Cleveland.”
- Ensure hero and above‑the‑fold images are optimized:
  - Reasonable file size.
  - Use Next.js `Image` with appropriate `sizes` and `priority` where needed.

---

## Technical & UX Considerations

- **Core Web Vitals:**
  - Keep LCP element (usually hero headline + main visual) server‑rendered where possible.
  - Avoid heavy JS blocking the first paint of core content.
- **Mobile:**
  - All key text (title idea, H1, primary CTA) should be visible without horizontal scroll.
  - Buttons and links large enough to tap.
- **Accessibility:**
  - Maintain logical heading order (H1 → H2 → H3).
  - Ensure link text is descriptive.
  - Color contrast meets WCAG for text and key UI elements.

---

## Quick Pre‑Deploy SEO Checklist (Homepage)

Before deploying changes to the homepage, confirm:

- [ ] `<title>` includes “AI consulting” and “small businesses” (and “Cleveland” if possible).
- [ ] Meta description explains what you do, for whom, and mentions automation / workflows.
- [ ] No product names (Cadence, Consensus Engine, Flowstack) in title/description/JSON‑LD `name`.
- [ ] H1 clearly states the main value proposition for small business AI / automation.
- [ ] At least one early H2 + paragraph uses “AI consulting” / “workflow automation” language.
- [ ] FAQ answers start with a short summary and match the FAQ JSON-LD.
- [ ] At least one internal link to Contact and Pricing uses descriptive, keyword-rich anchor text.
- [ ] Images have descriptive alt text where relevant.

---

## Additional SEO Areas (Site-Level)

These aren’t all implemented on the homepage itself, but they affect how well the homepage performs in search.

### Off-Page / Authority

- Aim to earn a small set of **high-quality backlinks** from:
  - Local business organizations (Cleveland Chamber, NGLCC directories).
  - Relevant blogs / podcasts where the founder appears as a guest.
  - Partner agencies or tools (automation platforms, AI communities).
- Use **descriptive anchor text** when you control the link (e.g., “AI consulting for small businesses” instead of “here”).
- Avoid spammy link schemes or mass directory submissions.

### Local SEO

- Keep a **Google Business Profile** up to date:
  - Business name: “Bespoke Ethos AI Consulting” (or final chosen naming).
  - Category: “Business to Business Service”, “Consultant”, or “Marketing Consultant” plus AI wording in the description.
  - Link to `https://www.bespokeethos.com`.
- Encourage satisfied clients to leave **Google reviews** that mention:
  - “AI consulting”, “workflow automation”, “small business”, and “Cleveland” where natural.
- Ensure **NAP (Name, Address, Phone)** is consistent across:
  - Website, Google Business Profile, LinkedIn, any directories you opt into.

### Content Strategy (Beyond Homepage)

- Use supporting content to rank for more specific questions and send authority to the homepage:
  - Blog posts or guides on:
    - “How small businesses can use AI to automate back-office tasks”
    - “Zapier vs. Make.com for small business automation”
    - “How to prepare your small business for AI consulting”
  - Each of these can internally link back to the homepage with relevant anchor text.
- Consider **case study pages**:
  - Show before/after for a small business automation project.
  - Include metrics (time saved, fewer errors, fewer manual steps).
  - Link back to the homepage and contact page.

### Analytics, Search Console & Experimentation

- Ensure **Google Search Console** is set up and the domain property is verified.
  - Submit the sitemap (`/sitemap.xml`) from the Next.js app.
  - Monitor:
    - Queries containing “AI consulting”, “small business AI”, “workflow automation”, “Cleveland AI”, etc.
    - Click-through rate (CTR) for the homepage.
- Ensure **analytics** (GA4 or similar) is configured:
  - Track key events:
    - Clicks on “Contact” and “Schedule” CTAs.
    - Scroll depth on the homepage.
  - Use this data to refine copy and CTA placement.
- For bigger messaging changes:
  - Consider simple **A/B tests** (even manual/over-time) on titles/meta descriptions:
    - Variant A: Emphasize “AI consulting for small businesses”.
    - Variant B: Emphasize “workflow automation consulting”.

### Crawl & Indexing Health

- Confirm:
  - `robots.txt` is present and allows crawling of important pages.
  - `sitemap.xml` includes the homepage and is kept up to date.
- Avoid:
  - Accidental `noindex` on important routes.
  - Excessive query-parameter pages being indexed (use canonical or disallow patterns if needed).
- Periodically check Search Console for:
  - Coverage issues (pages not indexed, soft 404s).
  - Mobile usability warnings.

