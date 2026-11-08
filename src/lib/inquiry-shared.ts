/** Inquiry constants shared by the browser form and the server (no validation library, to keep the client bundle small). */
/** 'general' covers privacy, correction and accessibility requests that are not about a practice. */
export const INQUIRY_TYPES = ['audit', 'consultation', 'general'] as const;

export const CHALLENGES = [
  'Not enough new-patient inquiries',
  'Inquiries are not the right fit',
  'Google Maps / local visibility',
  'Google Ads performance',
  'Website does not convert',
  'Can not tell which marketing works',
  'Multi-location or acquisition integration',
  'Reputation and reviews',
  'AI search visibility',
  'Other',
] as const;

const freeEmailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'live.com', 'msn.com'];

export function isFreeEmail(email: string) {
  const domain = email.split('@')[1]?.toLowerCase() ?? '';
  return freeEmailDomains.includes(domain);
}

/** Phrases that suggest a visitor is sending clinical information. Used to warn, never to store or log the content. */
export const CLINICAL_HINTS = /\b(dob|date of birth|ssn|social security|diagnos|x-?ray|radiograph|chart number|patient name|insurance id|medical record)\b/i;
