import type { NextConfig } from 'next';

const isPreview = process.env.SITE_ENV !== 'production';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = {
  // One URL policy: apex host, trailing slash on every page.
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // MDX content is read from /content at build time.
  outputFileTracingIncludes: { '/**': ['./content/**/*'] },
  async headers() {
    const headers = [{ source: '/:path*', headers: securityHeaders }];
    if (isPreview) {
      headers.push({ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] });
    }
    return headers;
  },
};

export default nextConfig;
