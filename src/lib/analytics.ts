'use client';

/**
 * Measurement events. Only these names are used:
 *   audit_request_accepted   — the backend accepted an audit request
 *   consultation_requested   — the backend accepted a strategy-call request (no booking provider is configured)
 *   consultation_booked      — a booking provider confirmed an appointment (fire only from the provider's confirmation callback)
 *   phone_link_clicked       — a visitor clicked a tel: link (not a lead)
 * qualified_lead is recorded by staff/CRM, never by the browser.
 *
 * Payloads must never contain names, emails, phone numbers, free text or patient information.
 */
type EventName = 'audit_request_accepted' | 'consultation_requested' | 'consultation_booked' | 'phone_link_clicked';
type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    __adm_consent?: 'granted' | 'denied';
  }
}

const FORBIDDEN = /name|email|phone|message|details|patient/i;

export function track(event: EventName, params: Params = {}, dedupeKey?: string) {
  if (typeof window === 'undefined') return;
  if (window.__adm_consent !== 'granted') return; // no consent, no analytics
  for (const k of Object.keys(params)) if (FORBIDDEN.test(k)) delete params[k];
  if (dedupeKey) {
    const key = `adm_evt_${event}_${dedupeKey}`;
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, '1');
    } catch {
      /* storage unavailable: still send once per page view */
    }
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/** Campaign attribution captured from the landing URL. UTM values only; no click IDs or personal data. */
export function readAttribution() {
  try {
    const stored = sessionStorage.getItem('adm_attr');
    if (stored) return JSON.parse(stored) as Record<string, string>;
    const u = new URL(window.location.href);
    const attr = {
      source: u.searchParams.get('utm_source') ?? undefined,
      medium: u.searchParams.get('utm_medium') ?? undefined,
      campaign: u.searchParams.get('utm_campaign') ?? undefined,
      landingPage: u.pathname,
    };
    sessionStorage.setItem('adm_attr', JSON.stringify(attr));
    return attr;
  } catch {
    return {};
  }
}
