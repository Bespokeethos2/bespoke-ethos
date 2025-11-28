import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = url.host.toLowerCase();
  const pathname = url.pathname;

  // Simple HTTP Basic Auth for Brutus chat + APIs - REMOVED
  // The user requested to remove Brutus code, and this might be causing 403s.
  // const protectedPaths = ["/chat", "/api/chat", "/api/brutus", "/api/brutus/fs"];
  // ... (auth logic removed)

  // Ensure bare domain redirects to canonical www host for SEO
  if (host === "bespokeethos.com") {
    const redirectUrl = new URL(url.toString());
    redirectUrl.host = "www.bespokeethos.com";
    return NextResponse.redirect(redirectUrl, 308);
  }

  const response = NextResponse.next();

  // Ensure /chat is not indexed by search engines
  if (pathname === "/chat" || pathname.startsWith("/chat/")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  // Run on all routes except Next.js internals and static assets
  matcher: ["/((?!_next|assets|favicon.ico|robots.txt|sitemap.xml).*)"],
};
