/** Pure funnel maths for the growth calculator. Kept separate so it can be unit tested. */
export type CalcInputs = {
  adSpend: number; // monthly media spend, USD
  cpc: number; // assumed average cost per click, USD
  inquiryRate: number; // % of clicks that become an inquiry (call, form, booking attempt)
  qualificationRate: number; // % of inquiries that are qualified new-patient opportunities
  bookingRate: number; // % of qualified inquiries that book
  attendanceRate: number; // % of bookings that attend
  agencyFee: number; // monthly management fee, USD (kept separate from ad spend)
  otherCost: number; // other monthly marketing cost attributed to this channel, USD
  revenuePerVisit: number | null; // optional: average collected revenue per attended new-patient visit
  marginPct: number | null; // optional: contribution margin % on that revenue
};

export type CalcResult = {
  clicks: number | null;
  inquiries: number | null;
  qualified: number | null;
  bookings: number | null;
  attended: number | null;
  totalCost: number;
  costPerAttended: number | null;
  costPerQualified: number | null;
  revenue: number | null;
  roas: number | null; // revenue / ad spend
  profitRoi: number | null; // (margin - total cost) / total cost
  errors: Partial<Record<keyof CalcInputs, string>>;
};

const pct = (v: number) => v / 100;

export function validate(i: CalcInputs) {
  const errors: CalcResult['errors'] = {};
  const nonNeg: (keyof CalcInputs)[] = ['adSpend', 'cpc', 'agencyFee', 'otherCost'];
  for (const k of nonNeg) {
    const v = i[k] as number;
    if (!Number.isFinite(v) || v < 0) errors[k] = 'Enter zero or a positive number.';
  }
  if (Number.isFinite(i.cpc) && i.cpc === 0) errors.cpc = 'Cost per click must be greater than zero to estimate clicks.';
  const rates: (keyof CalcInputs)[] = ['inquiryRate', 'qualificationRate', 'bookingRate', 'attendanceRate'];
  for (const k of rates) {
    const v = i[k] as number;
    if (!Number.isFinite(v) || v < 0 || v > 100) errors[k] = 'Enter a percentage from 0 to 100.';
  }
  if (i.revenuePerVisit !== null && (!Number.isFinite(i.revenuePerVisit) || i.revenuePerVisit < 0)) errors.revenuePerVisit = 'Enter zero or a positive number, or leave blank.';
  if (i.marginPct !== null && (!Number.isFinite(i.marginPct) || i.marginPct < 0 || i.marginPct > 100)) errors.marginPct = 'Enter a percentage from 0 to 100, or leave blank.';
  return errors;
}

export function calculate(i: CalcInputs): CalcResult {
  const errors = validate(i);
  const ok = (keys: (keyof CalcInputs)[]) => keys.every((k) => !errors[k]);
  const clicks = ok(['adSpend', 'cpc']) && i.cpc > 0 ? i.adSpend / i.cpc : null;
  const inquiries = clicks !== null && ok(['inquiryRate']) ? clicks * pct(i.inquiryRate) : null;
  const qualified = inquiries !== null && ok(['qualificationRate']) ? inquiries * pct(i.qualificationRate) : null;
  const bookings = qualified !== null && ok(['bookingRate']) ? qualified * pct(i.bookingRate) : null;
  const attended = bookings !== null && ok(['attendanceRate']) ? bookings * pct(i.attendanceRate) : null;
  const totalCost = (errors.adSpend ? 0 : i.adSpend) + (errors.agencyFee ? 0 : i.agencyFee) + (errors.otherCost ? 0 : i.otherCost);
  const costPerAttended = attended && attended > 0 ? totalCost / attended : null;
  const costPerQualified = qualified && qualified > 0 ? totalCost / qualified : null;
  const revenue = attended !== null && i.revenuePerVisit !== null && !errors.revenuePerVisit ? attended * i.revenuePerVisit : null;
  const roas = revenue !== null && i.adSpend > 0 ? revenue / i.adSpend : null;
  const profitRoi =
    revenue !== null && i.marginPct !== null && !errors.marginPct && totalCost > 0 ? (revenue * pct(i.marginPct) - totalCost) / totalCost : null;
  return { clicks, inquiries, qualified, bookings, attended, totalCost, costPerAttended, costPerQualified, revenue, roas, profitRoi, errors };
}

/** Demonstration defaults. Illustrative only — not observed dental-industry benchmarks. */
export const DEMO_INPUTS: CalcInputs = {
  adSpend: 3000,
  cpc: 6,
  inquiryRate: 8,
  qualificationRate: 60,
  bookingRate: 55,
  attendanceRate: 80,
  agencyFee: 1500,
  otherCost: 0,
  revenuePerVisit: null,
  marginPct: null,
};
