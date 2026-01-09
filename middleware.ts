import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;
  const searchParams = url.search;

  // Redirect all requests to alignment-ai.io with 301 permanent redirect
  const redirectUrl = new URL(`https://alignment-ai.io${pathname}${searchParams}`);
  return NextResponse.redirect(redirectUrl, 301);
}

export const config = {
  // Run on all routes except Next.js internals and static assets
  matcher: ["/((?!_next|assets|favicon.ico|robots.txt|sitemap.xml).*)"],
};
