'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useState } from 'react';

const KEY = 'adm_consent_v1';

/**
 * Rendered only when an analytics ID is configured. No analytics script loads
 * until the visitor chooses "Allow". The banner sits above the mobile bottom
 * bar and never covers form fields (it is part of the page flow on small
 * screens via a bottom offset that accounts for the bar and safe area).
 */
export function Consent({ gaId }: { gaId: string }) {
  const [choice, setChoice] = useState<'granted' | 'denied' | null | 'unset'>(null);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch {
      /* storage blocked: ask each visit */
    }
    const c = stored === 'granted' || stored === 'denied' ? stored : 'unset';
    setChoice(c);
    window.__adm_consent = c === 'granted' ? 'granted' : 'denied';
  }, []);

  const decide = (c: 'granted' | 'denied') => {
    try {
      localStorage.setItem(KEY, c);
    } catch {
      /* ignore */
    }
    window.__adm_consent = c;
    setChoice(c);
  };

  return (
    <>
      {choice === 'granted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(gaId)},{anonymize_ip:true,allow_google_signals:false,allow_ad_personalization_signals:false});`}
          </Script>
        </>
      )}
      {choice === 'unset' && (
        <div className="consent" role="region" aria-label="Analytics choice">
          <p>
            We would like to use analytics cookies to understand which pages help practice owners. No analytics run unless you
            allow them. <Link href="/privacy-policy/">Privacy policy</Link>.
          </p>
          <div className="btn-row">
            <button type="button" className="btn btn--primary" onClick={() => decide('granted')}>
              Allow analytics
            </button>
            <button type="button" className="btn btn--secondary" onClick={() => decide('denied')}>
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
