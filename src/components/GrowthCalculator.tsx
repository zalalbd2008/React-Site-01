'use client';

import { useId, useMemo, useState } from 'react';
import { calculate, DEMO_INPUTS, type CalcInputs } from '@/lib/calculator';

type FieldDef = { key: keyof CalcInputs; label: string; unit: '$' | '%'; hint: string; optional?: boolean };

const groups: { legend: string; fields: FieldDef[] }[] = [
  {
    legend: 'Spend and click assumptions',
    fields: [
      { key: 'adSpend', label: 'Monthly ad spend', unit: '$', hint: 'Media spend paid to the ad platform. Excludes agency fees.' },
      { key: 'cpc', label: 'Assumed average cost per click', unit: '$', hint: 'Use your own account history where possible.' },
    ],
  },
  {
    legend: 'Conversion assumptions',
    fields: [
      { key: 'inquiryRate', label: 'Clicks that become an inquiry', unit: '%', hint: 'Calls, forms and booking attempts that reach the practice.' },
      { key: 'qualificationRate', label: 'Inquiries that are qualified', unit: '%', hint: 'Genuine new-patient opportunities the practice can serve.' },
      { key: 'bookingRate', label: 'Qualified inquiries that book', unit: '%', hint: 'Depends on call handling, availability and fit.' },
      { key: 'attendanceRate', label: 'Bookings that attend', unit: '%', hint: 'Show rate for first visits.' },
    ],
  },
  {
    legend: 'Costs and value',
    fields: [
      { key: 'agencyFee', label: 'Monthly agency or management fee', unit: '$', hint: 'Kept separate from ad spend.' },
      { key: 'otherCost', label: 'Other monthly cost for this channel', unit: '$', hint: 'Call tracking, landing pages, software.' },
      { key: 'revenuePerVisit', label: 'Average collected revenue per attended new patient', unit: '$', hint: 'Optional. Use collected, not scheduled, revenue for the period you care about.', optional: true },
      { key: 'marginPct', label: 'Contribution margin on that revenue', unit: '%', hint: 'Optional. Revenue minus direct clinical costs, as a percentage.', optional: true },
    ],
  },
];

const n0 = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
const n1 = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });
const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const show = (v: number | null, f: Intl.NumberFormat) => (v === null || !Number.isFinite(v) ? '—' : f.format(v));

export function GrowthCalculator() {
  const id = useId();
  const [raw, setRaw] = useState<Record<string, string>>(() =>
    Object.fromEntries(Object.entries(DEMO_INPUTS).map(([k, v]) => [k, v === null ? '' : String(v)])),
  );
  const inputs = useMemo<CalcInputs>(() => {
    const num = (k: keyof CalcInputs) => (raw[k].trim() === '' ? NaN : Number(raw[k]));
    const opt = (k: keyof CalcInputs) => (raw[k].trim() === '' ? null : Number(raw[k]));
    return {
      adSpend: num('adSpend'),
      cpc: num('cpc'),
      inquiryRate: num('inquiryRate'),
      qualificationRate: num('qualificationRate'),
      bookingRate: num('bookingRate'),
      attendanceRate: num('attendanceRate'),
      agencyFee: num('agencyFee'),
      otherCost: num('otherCost'),
      revenuePerVisit: opt('revenuePerVisit'),
      marginPct: opt('marginPct'),
    };
  }, [raw]);
  const r = calculate(inputs);

  return (
    <div className="calc">
      <form onSubmit={(e) => e.preventDefault()} aria-label="Calculator inputs" noValidate>
        <p className="field__hint" style={{ marginBottom: 'var(--space-4)' }}>
          The starting values are <strong>illustrative placeholders</strong>, not dental-industry benchmarks. Replace them with
          your own figures.
        </p>
        {groups.map((g) => (
          <fieldset key={g.legend} style={{ marginBottom: 'var(--space-4)' }}>
            <legend>{g.legend}</legend>
            {g.fields.map((f) => {
              const err = r.errors[f.key];
              const fid = `${id}-${f.key}`;
              return (
                <div className="field" key={f.key}>
                  <label htmlFor={fid}>
                    {f.label} ({f.unit === '$' ? 'USD' : 'percent'}){f.optional ? ' — optional' : ''}
                  </label>
                  <input
                    id={fid}
                    inputMode="decimal"
                    type="number"
                    min={0}
                    max={f.unit === '%' ? 100 : undefined}
                    step="any"
                    value={raw[f.key]}
                    aria-invalid={err ? 'true' : undefined}
                    aria-describedby={`${fid}-hint${err ? ` ${fid}-err` : ''}`}
                    onChange={(e) => setRaw((s) => ({ ...s, [f.key]: e.target.value }))}
                  />
                  <span className="field__hint" id={`${fid}-hint`}>
                    {f.hint}
                  </span>
                  {err && (
                    <span className="field__error" id={`${fid}-err`}>
                      {err}
                    </span>
                  )}
                </div>
              );
            })}
          </fieldset>
        ))}
        <button type="button" className="btn btn--secondary" onClick={() => setRaw(Object.fromEntries(Object.entries(DEMO_INPUTS).map(([k, v]) => [k, v === null ? '' : String(v)])))}>
          Reset to illustrative values
        </button>
      </form>

      <section className="calc__out" aria-labelledby={`${id}-out`} aria-live="polite">
        <h3 id={`${id}-out`} style={{ marginTop: 0 }}>
          Estimated monthly outcome
        </h3>
        <dl>
          <dt>Estimated clicks</dt>
          <dd>{show(r.clicks, n0)}</dd>
          <dt>Estimated inquiries</dt>
          <dd>{show(r.inquiries, n1)}</dd>
          <dt>Estimated qualified inquiries</dt>
          <dd>{show(r.qualified, n1)}</dd>
          <dt>Estimated bookings</dt>
          <dd>{show(r.bookings, n1)}</dd>
          <dt>Estimated attended visits</dt>
          <dd>{show(r.attended, n1)}</dd>
          <dt>Total relevant cost (ad spend + fees + other)</dt>
          <dd>{usd.format(r.totalCost)}</dd>
          <dt>Estimated cost per qualified inquiry</dt>
          <dd>{show(r.costPerQualified, usd)}</dd>
          <dt>Estimated cost per attended new-patient visit</dt>
          <dd>{show(r.costPerAttended, usd)}</dd>
          <dt>Estimated collected revenue</dt>
          <dd>{show(r.revenue, usd)}</dd>
          <dt>ROAS (revenue ÷ ad spend only)</dt>
          <dd>{r.roas === null ? '—' : `${n1.format(r.roas)}×`}</dd>
          <dt>Profit-based ROI ((margin − total cost) ÷ total cost)</dt>
          <dd>{r.profitRoi === null ? '—' : `${n0.format(r.profitRoi * 100)}%`}</dd>
        </dl>
        <p className="field__hint" style={{ marginTop: 'var(--space-4)', marginBottom: 0 }}>
          A dash means an input is missing, invalid or would divide by zero. Cost per attended visit only describes new patients if
          every input above refers to new-patient activity. ROAS ignores fees and clinical costs; profit-based ROI includes them.
        </p>
      </section>
    </div>
  );
}
