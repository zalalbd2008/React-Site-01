import type { MetadataRoute } from 'next';
import { absoluteUrl, env } from '@/lib/site';

/*
 * Production: public pages are open to search crawlers, including
 * OAI-SearchBot (ChatGPT search). GPTBot (model training) is a separate
 * owner decision recorded in docs/owner-inputs.md; no training-specific rule
 * is added here. robots.txt is not access control: the preview is protected
 * by authentication in proxy.ts and sends noindex headers.
 */
export default function robots(): MetadataRoute.Robots {
  if (!env.isProduction) return { rules: [{ userAgent: '*', disallow: '/' }] };
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/thank-you/'] },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: ['/api/', '/thank-you/'] },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/'),
  };
}
