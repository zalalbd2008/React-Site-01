import 'server-only';
import fs from 'node:fs/promises';
import path from 'node:path';
import type { Inquiry } from './inquiry';

/**
 * Inquiry delivery. Exactly one verified destination must be configured by
 * environment variables. Nothing is hard-coded, and no other business's
 * address is reused. Without configuration, delivery fails closed and the
 * visitor sees an honest error with a retry option.
 *
 *   INQUIRY_WEBHOOK_URL (+ optional INQUIRY_WEBHOOK_SECRET)  → POST JSON to a CRM/automation endpoint
 *   RESEND_API_KEY + INQUIRY_TO_EMAIL + INQUIRY_FROM_EMAIL    → email via Resend's HTTP API
 *   INQUIRY_DEV_SINK=file (preview/test only)                  → append to .data/inquiries.jsonl
 */
export type DeliveryResult = { ok: true; channel: string } | { ok: false; reason: 'not_configured' | 'upstream_error' };

export function deliveryChannel(): 'webhook' | 'resend' | 'file' | null {
  if (process.env.INQUIRY_WEBHOOK_URL) return 'webhook';
  if (process.env.RESEND_API_KEY && process.env.INQUIRY_TO_EMAIL && process.env.INQUIRY_FROM_EMAIL) return 'resend';
  if (process.env.INQUIRY_DEV_SINK === 'file' && process.env.SITE_ENV !== 'production') return 'file';
  return null;
}

function toText(i: Inquiry) {
  return [
    `Type: ${i.type === 'audit' ? 'Dental Growth Audit request' : 'Strategy call request'}`,
    `Name: ${i.name}`,
    `Email: ${i.email}`,
    `Phone: ${i.phone || '—'}`,
    `Role: ${i.role || '—'}`,
    `Practice: ${i.practice}`,
    `Website: ${i.website}`,
    `Location: ${i.location}`,
    `Practices/locations: ${i.practiceCount || '—'}`,
    `Main challenge: ${i.challenge}`,
    `Details: ${i.details || '—'}`,
    `Attribution: ${JSON.stringify(i.utm)}`,
    `Submission ID: ${i.submissionId}`,
  ].join('\n');
}

export async function deliver(i: Inquiry): Promise<DeliveryResult> {
  const channel = deliveryChannel();
  if (!channel) return { ok: false, reason: 'not_configured' };
  const payload = { ...i, receivedAt: new Date().toISOString() };
  try {
    if (channel === 'webhook') {
      const res = await fetch(process.env.INQUIRY_WEBHOOK_URL!, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          ...(process.env.INQUIRY_WEBHOOK_SECRET ? { authorization: `Bearer ${process.env.INQUIRY_WEBHOOK_SECRET}` } : {}),
          'idempotency-key': i.submissionId,
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(10_000),
      });
      return res.ok ? { ok: true, channel } : { ok: false, reason: 'upstream_error' };
    }
    if (channel === 'resend') {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'idempotency-key': i.submissionId,
        },
        body: JSON.stringify({
          from: process.env.INQUIRY_FROM_EMAIL,
          to: [process.env.INQUIRY_TO_EMAIL],
          reply_to: i.email,
          subject: `${i.type === 'audit' ? 'Audit request' : 'Strategy call request'}: ${i.practice}`,
          text: toText(i),
        }),
        signal: AbortSignal.timeout(10_000),
      });
      return res.ok ? { ok: true, channel } : { ok: false, reason: 'upstream_error' };
    }
    // File sink for preview testing only: a durable local queue.
    const dir = path.join(process.cwd(), '.data');
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(path.join(dir, 'inquiries.jsonl'), JSON.stringify(payload) + '\n', 'utf8');
    return { ok: true, channel };
  } catch {
    return { ok: false, reason: 'upstream_error' };
  }
}
