import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = url.host.toLowerCase();
  const pathname = url.pathname;

  // Redirect all bespokeethos.com domains to alignment-ai.io with 301 permanent redirect
  if (host === "bespokeethos.com" || host === "www.bespokeethos.com") {
    const redirectUrl = new URL(url.toString());
    redirectUrl.host = "alignment-ai.io";
    return NextResponse.redirect(redirectUrl, 301);
  }

  // X-Robots-Tag handled in next.config.ts headers() for consistency
  return NextResponse.next();
}

export const config = {
  // Run on all routes except Next.js internals and static assets
  matcher: ["/((?!_next|assets|favicon.ico|robots.txt|sitemap.xml).*)"],
};
