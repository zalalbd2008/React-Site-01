import { z } from 'zod';
import { INQUIRY_TYPES, CHALLENGES } from './inquiry-shared.ts';

export { INQUIRY_TYPES, CHALLENGES, isFreeEmail, CLINICAL_HINTS } from './inquiry-shared.ts';

const trimmed = (max: number, label = 'This field') =>
  z.string({ message: `${label} is required.` }).trim().max(max, `${label} is too long.`);

export const inquirySchema = z.object({
  type: z.enum(INQUIRY_TYPES, { message: 'Please choose an audit or a strategy call.' }),
  name: trimmed(120, 'Your name').min(2, 'Please enter your name.'),
  email: trimmed(200, 'Email').email('Please enter a valid email address.'),
  practice: trimmed(160, 'Practice name').min(2, 'Please enter the practice or group name.'),
  website: trimmed(300, 'Website')
    .min(4, 'Please enter the practice website.')
    .refine((v) => /^(https?:\/\/)?[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(v), 'Please enter a website address such as example.com.'),
  location: trimmed(160, 'Location').min(2, 'Please enter the city and state of the main office.'),
  challenge: z.enum(CHALLENGES, { message: 'Please choose the main growth challenge.' }),
  details: trimmed(2000).optional().default(''),
  phone: trimmed(40)
    .optional()
    .default('')
    .refine((v) => v === '' || /^[0-9+().\-\s]{7,}$/.test(v), 'Please enter a valid phone number or leave it blank.'),
  practiceCount: z.enum(['1', '2-5', '6-20', '21+', '']).optional().default(''),
  role: trimmed(80).optional().default(''),
  consentContact: z.literal(true, { message: 'Please confirm we may contact you about this request.' }),
  // Anti-abuse fields.
  submissionId: z.string({ message: 'Please reload the page and try again.' }).uuid('Please reload the page and try again.'),
  startedAt: z.number({ message: 'Please reload the page and try again.' }).int().positive(),
  company_url: z.string().max(0).optional().default(''), // honeypot: must stay empty
  // Permitted campaign attribution (no personal data).
  utm: z
    .object({
      source: trimmed(100).optional(),
      medium: trimmed(100).optional(),
      campaign: trimmed(150).optional(),
      landingPage: trimmed(300).optional(),
    })
    .optional()
    .default({}),
});

export type Inquiry = z.infer<typeof inquirySchema>;

