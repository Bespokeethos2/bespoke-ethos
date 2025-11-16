import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = url.host.toLowerCase();

  // Ensure bare domain redirects to canonical www host for SEO
  if (host === "bespokeethos.com") {
    const redirectUrl = new URL(url.toString());
    redirectUrl.host = "www.bespokeethos.com";
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Run on all routes except Next.js internals and static assets
  matcher: ["/((?!_next|assets|favicon.ico|robots.txt|sitemap.xml).*)"],
};

