import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// Simple per-IP rate limiter for the checkout endpoint.
// Note: state resets on serverless cold starts — effective against basic abuse,
// not a substitute for Vercel KV-based rate limiting for high-traffic production use.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 10;
const WINDOW_MS = 60_000;

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/api/checkout' && request.method === 'POST') {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (entry && now < entry.resetAt) {
      if (entry.count >= MAX_REQUESTS) {
        return NextResponse.json(
          { error: 'Too many requests. Please wait a minute.' },
          { status: 429, headers: { 'Retry-After': '60' } }
        );
      }
      entry.count++;
    } else {
      rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    }
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/api/checkout',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
