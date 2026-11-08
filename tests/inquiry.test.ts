import { test } from 'node:test';
import assert from 'node:assert/strict';
import { inquirySchema } from '../src/lib/inquiry.ts';

const valid = {
  type: 'audit',
  name: 'Test Owner',
  email: 'owner@example-dental.com',
  practice: 'Example Dental',
  website: 'example-dental.com',
  location: 'Atlanta, GA',
  challenge: 'Google Ads performance',
  consentContact: true,
  submissionId: '3f2b1c9e-8a7d-4e6f-9b0a-1c2d3e4f5a6b',
  startedAt: 1_700_000_000_000,
};

test('accepts a complete business inquiry', () => {
  assert.equal(inquirySchema.safeParse(valid).success, true);
});

test('requires consent to be contacted', () => {
  const r = inquirySchema.safeParse({ ...valid, consentContact: false });
  assert.equal(r.success, false);
});

test('a filled honeypot is rejected', () => {
  assert.equal(inquirySchema.safeParse({ ...valid, company_url: 'http://spam.example' }).success, false);
});

test('missing fields return readable messages', () => {
  const r = inquirySchema.safeParse({ type: 'audit' });
  assert.equal(r.success, false);
  const msgs = r.success ? [] : r.error.issues.map((i) => i.message);
  assert.ok(msgs.includes('Your name is required.'));
  assert.ok(!msgs.some((m) => m.includes('expected string')));
});

test('rejects malformed website and phone', () => {
  assert.equal(inquirySchema.safeParse({ ...valid, website: 'not a site' }).success, false);
  assert.equal(inquirySchema.safeParse({ ...valid, phone: 'call me' }).success, false);
});

test('unknown challenge values are rejected', () => {
  assert.equal(inquirySchema.safeParse({ ...valid, challenge: 'Something else' }).success, false);
});

test('general requests need a description but no practice details', () => {
  const base = { type: 'general', name: 'A Visitor', email: 'visitor@example.com', consentContact: true, submissionId: valid.submissionId, startedAt: valid.startedAt };
  assert.equal(inquirySchema.safeParse({ ...base, details: 'Please correct the date on your call tracking guide.' }).success, true);
  assert.equal(inquirySchema.safeParse({ ...base, details: '' }).success, false);
});

test('audit requests still require practice fields', () => {
  const r = inquirySchema.safeParse({ ...valid, practice: '', website: '', location: '', challenge: '' });
  assert.equal(r.success, false);
  const paths = r.success ? [] : r.error.issues.map((i) => i.path[0]);
  for (const k of ['practice', 'website', 'location', 'challenge']) assert.ok(paths.includes(k), `missing ${k} error`);
});
