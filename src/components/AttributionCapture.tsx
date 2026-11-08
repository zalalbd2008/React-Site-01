'use client';

import { useEffect } from 'react';
import { readAttribution } from '@/lib/analytics';

/** Records the landing page and any UTM values once per tab, in session storage only. Nothing is sent until a form is submitted. */
export function AttributionCapture() {
  useEffect(() => {
    readAttribution();
  }, []);
  return null;
}
