import { NextResponse, type NextRequest } from 'next/server';

/*
 * 1. Host normalisation: www and other aliases redirect once to the apex host.
 * 2. Preview protection: when SITE_ENV is not "production" and PREVIEW_PASSWORD
 *    is set, every request needs HTTP Basic credentials.
 */
const CANONICAL_HOST = 'alphadentalmedia.com';

export function proxy(req: NextRequest) {
  const isProduction = process.env.SITE_ENV === 'production';
  const host = req.headers.get('host') ?? '';

  if (isProduction && host.replace(/:\d+$/, '') === `www.${CANONICAL_HOST}`) {
    const url = req.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.protocol = 'https:';
    url.port = '';
    return NextResponse.redirect(url, 308);
  }

  // In production, any host other than the canonical domain (e.g. *.vercel.app) must not be indexed.
  if (isProduction && host.replace(/:\d+$/, '') !== CANONICAL_HOST && !host.startsWith('localhost')) {
    const res = NextResponse.next();
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return res;
  }

  const password = process.env.PREVIEW_PASSWORD;
  if (!isProduction && password) {
    const auth = req.headers.get('authorization') ?? '';
    const [scheme, encoded] = auth.split(' ');
    const decoded = scheme === 'Basic' && encoded ? atob(encoded) : '';
    const supplied = decoded.slice(decoded.indexOf(':') + 1);
    if (supplied !== password) {
      return new NextResponse('Preview access requires a password.', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Alpha Dental Media preview"', 'X-Robots-Tag': 'noindex, nofollow' },
      });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
