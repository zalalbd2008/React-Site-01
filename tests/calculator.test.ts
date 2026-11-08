import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculate, DEMO_INPUTS, type CalcInputs } from '../src/lib/calculator.ts';

const base: CalcInputs = { ...DEMO_INPUTS, adSpend: 3000, cpc: 6, inquiryRate: 10, qualificationRate: 50, bookingRate: 50, attendanceRate: 80, agencyFee: 1000, otherCost: 200 };

test('funnel arithmetic follows the documented formulas', () => {
  const r = calculate(base);
  assert.equal(r.clicks, 500);
  assert.equal(r.inquiries, 50);
  assert.equal(r.qualified, 25);
  assert.equal(r.bookings, 12.5);
  assert.equal(r.attended, 10);
  assert.equal(r.totalCost, 4200); // ad spend + fee + other, kept separate
  assert.equal(r.costPerAttended, 420);
  assert.equal(r.costPerQualified, 168);
});

test('zero cost per click is an error, not Infinity', () => {
  const r = calculate({ ...base, cpc: 0 });
  assert.equal(r.clicks, null);
  assert.equal(r.attended, null);
  assert.equal(r.costPerAttended, null);
  assert.ok(r.errors.cpc);
});

test('zero attended visits gives no cost per visit', () => {
  const r = calculate({ ...base, attendanceRate: 0 });
  assert.equal(r.attended, 0);
  assert.equal(r.costPerAttended, null);
});

test('invalid percentages and negatives are rejected', () => {
  const r = calculate({ ...base, inquiryRate: 140, adSpend: -5, qualificationRate: Number.NaN });
  assert.ok(r.errors.inquiryRate);
  assert.ok(r.errors.adSpend);
  assert.ok(r.errors.qualificationRate);
  assert.equal(r.inquiries, null);
});

test('ROAS uses ad spend only; profit ROI uses margin and total cost', () => {
  const r = calculate({ ...base, revenuePerVisit: 600, marginPct: 40 });
  assert.equal(r.revenue, 6000);
  assert.equal(r.roas, 2); // 6000 / 3000
  assert.ok(Math.abs((r.profitRoi ?? 0) - (6000 * 0.4 - 4200) / 4200) < 1e-9);
});

test('optional value inputs left blank produce no ROAS/ROI', () => {
  const r = calculate(base);
  assert.equal(r.revenue, null);
  assert.equal(r.roas, null);
  assert.equal(r.profitRoi, null);
});
