/**
 * Legacy proxy module - X-Robots-Tag handling moved to next.config.ts headers()
 * for centralized SEO control. This module is kept for reference but not actively used.
 *
 * SEO header logic is now in:
 * - next.config.ts: X-Robots-Tag for all routes (production vs preview differentiation)
 * - robots.ts: robots.txt generation
 * - Individual page metadata exports
 */
import { NextResponse, type NextRequest } from 'next/server';

export function proxy(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
