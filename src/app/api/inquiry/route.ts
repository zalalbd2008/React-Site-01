import { NextResponse, type NextRequest } from 'next/server';
import { inquirySchema } from '@/lib/inquiry';
import { deliver } from '@/lib/delivery';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/*
 * Abuse controls are in-memory and therefore per server instance. They stop
 * casual abuse and double submits; for multi-instance hosting, back them with
 * a shared store (see docs/architecture.md).
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MIN_FILL_MS = 2500;
const hits = new Map<string, number[]>();
const recent = new Map<string, { at: number; status: number; body: unknown }>();

function rateLimited(key: string) {
  const now = Date.now();
  const list = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(key, list);
  if (hits.size > 5000) hits.clear();
  return list.length > MAX_PER_WINDOW;
}

function json(status: number, body: unknown) {
  return NextResponse.json(body, { status, headers: { 'cache-control': 'no-store' } });
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');
  const host = req.headers.get('host');
  if (origin && host && new URL(origin).host !== host) return json(403, { ok: false, code: 'bad_origin' });
  if (!req.headers.get('content-type')?.includes('application/json')) return json(415, { ok: false, code: 'unsupported' });

  const ip = (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) return json(429, { ok: false, code: 'rate_limited', message: 'Too many requests. Please wait a few minutes and try again.' });

  let data: unknown;
  try {
    const text = await req.text();
    if (text.length > 20_000) return json(413, { ok: false, code: 'too_large' });
    data = JSON.parse(text);
  } catch {
    return json(400, { ok: false, code: 'bad_json' });
  }

  const parsed = inquirySchema.safeParse(data);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const k = String(issue.path[0] ?? 'form');
      if (!fieldErrors[k]) fieldErrors[k] = issue.message;
    }
    // A filled honeypot looks like a validation failure, with no hint why.
    return json(422, { ok: false, code: 'invalid', fieldErrors });
  }
  const inquiry = parsed.data;

  // Duplicate submission: return the original outcome instead of delivering twice.
  const prior = recent.get(inquiry.submissionId);
  if (prior) return json(prior.status, prior.body);

  if (Date.now() - inquiry.startedAt < MIN_FILL_MS) return json(422, { ok: false, code: 'invalid', fieldErrors: { form: 'Please review the form and submit again.' } });

  const result = await deliver(inquiry);
  const [status, body] = result.ok
    ? [200, { ok: true, code: 'accepted', submissionId: inquiry.submissionId }]
    : result.reason === 'not_configured'
      ? [503, { ok: false, code: 'delivery_not_configured', message: 'Online requests are not being accepted yet. Your details were not sent.' }]
      : [502, { ok: false, code: 'delivery_failed', message: 'We could not send your request. Nothing was saved. Please try again.' }];

  if (result.ok) {
    recent.set(inquiry.submissionId, { at: Date.now(), status, body });
    if (recent.size > 2000) {
      const cutoff = Date.now() - WINDOW_MS;
      for (const [k, v] of recent) if (v.at < cutoff) recent.delete(k);
    }
  }
  return json(status, body);
}

export function GET() {
  return json(405, { ok: false, code: 'method_not_allowed' });
}
