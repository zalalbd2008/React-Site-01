'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import { CHALLENGES, CLINICAL_HINTS, isFreeEmail } from '@/lib/inquiry-shared';
import { readAttribution, track } from '@/lib/analytics';

type InquiryType = 'audit' | 'consultation' | 'general';
type Props = { defaultType?: InquiryType };
type Errors = Record<string, string>;

const uuid = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : 'xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx'.replace(/x/g, () => ((Math.random() * 16) | 0).toString(16));

export function InquiryForm({ defaultType = 'audit' }: Props) {
  const id = useId();
  const router = useRouter();
  const [type, setType] = useState<InquiryType>(defaultType);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [warnClinical, setWarnClinical] = useState(false);
  const [freeEmail, setFreeEmail] = useState(false);
  const submissionId = useRef<string>('');
  const startedAt = useRef<number>(0);
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    submissionId.current = uuid();
    startedAt.current = Date.now();
    const t = new URLSearchParams(window.location.search).get('type');
    if (t === 'consultation' || t === 'audit' || t === 'general') setType(t);
  }, []);

  const f = (name: string) => ({
    id: `${id}-${name}`,
    name,
    'aria-invalid': errors[name] ? ('true' as const) : undefined,
    'aria-describedby': [errors[name] ? `${id}-${name}-err` : '', `${id}-${name}-hint`].filter(Boolean).join(' ') || undefined,
  });
  const Err = ({ name }: { name: string }) =>
    errors[name] ? (
      <span className="field__error" id={`${id}-${name}-err`}>
        {errors[name]}
      </span>
    ) : null;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return; // duplicate-click protection
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? '');
    const body = {
      type,
      name: get('name'),
      email: get('email'),
      practice: get('practice'),
      website: get('website'),
      location: get('location'),
      challenge: get('challenge'),
      details: get('details'),
      phone: get('phone'),
      practiceCount: get('practiceCount'),
      role: get('role'),
      consentContact: fd.get('consentContact') === 'on',
      submissionId: submissionId.current,
      startedAt: startedAt.current,
      company_url: get('company_url'),
      utm: readAttribution(),
    };
    setStatus('sending');
    setErrors({});
    setMessage('');
    try {
      const res = await fetch('/api/inquiry/', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; fieldErrors?: Errors; message?: string };
      if (res.ok && data.ok) {
        // Success is shown only after the server confirms delivery.
        if (type !== 'general') track(type === 'audit' ? 'audit_request_accepted' : 'consultation_requested', { inquiry_type: type, challenge: body.challenge }, submissionId.current);
        router.push(`/thank-you/?type=${type}`);
        return;
      }
      if (res.status === 422 && data.fieldErrors) {
        setErrors(data.fieldErrors);
        setStatus('error');
        setMessage(data.fieldErrors.form ?? 'Please correct the highlighted fields.');
        requestAnimationFrame(() => {
          const first = Object.keys(data.fieldErrors!).find((k) => k !== 'form');
          const el = first ? formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`) : null;
          (el ?? statusRef.current)?.focus();
        });
        return;
      }
      setStatus('error');
      setMessage(data.message ?? 'Something went wrong and your request was not sent. Please try again.');
      requestAnimationFrame(() => statusRef.current?.focus());
    } catch {
      setStatus('error');
      setMessage('We could not reach the server, so your request was not sent. Check your connection and try again.');
      requestAnimationFrame(() => statusRef.current?.focus());
    }
  }

  return (
    <form ref={formRef} className="form" onSubmit={onSubmit} noValidate aria-describedby={`${id}-intro`}>
      <noscript>
        <p className="form-status form-status--error">This form needs JavaScript to send your request securely. Please enable JavaScript and reload the page.</p>
      </noscript>
      <p id={`${id}-intro`} className="field__hint">
        This form is for dental practice owners, managers and dental groups. <strong>Please do not include patient names, records or any clinical information.</strong> Required fields are marked.
      </p>

      <fieldset className="field" style={{ border: 0, padding: 0, margin: 0 }}>
        <legend>What would you like?</legend>
        <div className="field field--check">
          <input type="radio" id={`${id}-t-audit`} name="type" value="audit" checked={type === 'audit'} onChange={() => setType('audit')} />
          <label htmlFor={`${id}-t-audit`}>Request a Dental Growth Audit</label>
        </div>
        <div className="field field--check">
          <input type="radio" id={`${id}-t-consult`} name="type" value="consultation" checked={type === 'consultation'} onChange={() => setType('consultation')} />
          <label htmlFor={`${id}-t-consult`}>Request a strategy call (we reply by email to arrange a time)</label>
        </div>
        <div className="field field--check">
          <input type="radio" id={`${id}-t-general`} name="type" value="general" checked={type === 'general'} onChange={() => setType('general')} />
          <label htmlFor={`${id}-t-general`}>Something else: a privacy request, a correction or an accessibility issue</label>
        </div>
      </fieldset>

      <div className="form-row form-row--2">
        <div className="field">
          <label htmlFor={`${id}-name`}>Your name (required)</label>
          <input {...f('name')} autoComplete="name" required maxLength={120} />
          <span className="visually-hidden" id={`${id}-name-hint`}>Your full name</span>
          <Err name="name" />
        </div>
        <div className="field">
          <label htmlFor={`${id}-email`}>Business email (required)</label>
          <input
            {...f('email')}
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            onBlur={(e) => setFreeEmail(isFreeEmail(e.currentTarget.value))}
          />
          <span className="field__hint" id={`${id}-email-hint`}>
            {freeEmail ? 'A practice email helps us confirm who we are speaking with, but a personal address is fine.' : 'We reply to this address.'}
          </span>
          <Err name="email" />
        </div>
      </div>

      {type !== 'general' && (
        <>
      <div className="form-row form-row--2">
        <div className="field">
          <label htmlFor={`${id}-practice`}>Practice or group name (required)</label>
          <input {...f('practice')} autoComplete="organization" required maxLength={160} />
          <span className="visually-hidden" id={`${id}-practice-hint`}>Practice name</span>
          <Err name="practice" />
        </div>
        <div className="field">
          <label htmlFor={`${id}-website`}>Practice website (required)</label>
          <input {...f('website')} inputMode="url" autoComplete="url" required maxLength={300} placeholder="example.com" />
          <span className="visually-hidden" id={`${id}-website-hint`}>Website address</span>
          <Err name="website" />
        </div>
      </div>

      <div className="form-row form-row--2">
        <div className="field">
          <label htmlFor={`${id}-location`}>Main office city and state (required)</label>
          <input {...f('location')} autoComplete="address-level2" required maxLength={160} placeholder="Atlanta, GA" />
          <span className="visually-hidden" id={`${id}-location-hint`}>City and state</span>
          <Err name="location" />
        </div>
        <div className="field">
          <label htmlFor={`${id}-practiceCount`}>Number of locations</label>
          <select {...f('practiceCount')} defaultValue="">
            <option value="">Prefer not to say</option>
            <option value="1">1</option>
            <option value="2-5">2–5</option>
            <option value="6-20">6–20</option>
            <option value="21+">21 or more</option>
          </select>
          <span className="visually-hidden" id={`${id}-practiceCount-hint`}>Optional</span>
          <Err name="practiceCount" />
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${id}-challenge`}>Main growth challenge (required)</label>
        <select {...f('challenge')} required defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {CHALLENGES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <span className="visually-hidden" id={`${id}-challenge-hint`}>Choose the closest option</span>
        <Err name="challenge" />
      </div>

        </>
      )}

      <div className="field">
        <label htmlFor={`${id}-details`}>{type === 'general' ? 'Describe your request (required)' : 'Anything else we should know?'}</label>
        <textarea
          {...f('details')}
          maxLength={2000}
          onChange={(e) => setWarnClinical(CLINICAL_HINTS.test(e.currentTarget.value))}
        />
        <span className="field__hint" id={`${id}-details-hint`}>
          {type === 'general'
            ? 'Tell us which page or information your request is about. No patient information.'
            : 'Optional. Goals, services you want to grow, current agency or capacity limits. No patient information.'}
        </span>
        {warnClinical && (
          <span className="field__error" role="status">
            This looks like it may contain patient or clinical details. Please remove them before sending.
          </span>
        )}
        <Err name="details" />
      </div>

      <div className="form-row form-row--2">
        <div className="field">
          <label htmlFor={`${id}-phone`}>Phone</label>
          <input {...f('phone')} type="tel" autoComplete="tel" maxLength={40} />
          <span className="field__hint" id={`${id}-phone-hint`}>Optional.</span>
          <Err name="phone" />
        </div>
        <div className="field">
          <label htmlFor={`${id}-role`}>Your role</label>
          <input {...f('role')} autoComplete="organization-title" maxLength={80} placeholder="Owner dentist, practice manager…" />
          <span className="field__hint" id={`${id}-role-hint`}>Optional.</span>
          <Err name="role" />
        </div>
      </div>

      <div className="hp" aria-hidden="true">
        <label htmlFor={`${id}-company_url`}>Leave this field empty</label>
        <input id={`${id}-company_url`} name="company_url" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field field--check">
        <input type="checkbox" {...f('consentContact')} required />
        <label htmlFor={`${id}-consentContact`}>
          I agree that Alpha Dental Media may contact me about this request. (required) See our{' '}
          <Link href="/privacy-policy/">privacy policy</Link>.
        </label>
        <span className="visually-hidden" id={`${id}-consentContact-hint`}>Required to send the request</span>
      </div>
      <Err name="consentContact" />

      <div ref={statusRef} tabIndex={-1} aria-live="assertive">
        {status === 'error' && message && (
          <div className="form-status form-status--error">
            <p style={{ margin: 0 }}>{message}</p>
          </div>
        )}
      </div>

      <div>
        <button type="submit" className="btn btn--primary" disabled={status === 'sending'} aria-disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : status === 'error' ? 'Try again' : type === 'audit' ? 'Send audit request' : type === 'consultation' ? 'Send call request' : 'Send request'}
        </button>
      </div>
    </form>
  );
}
