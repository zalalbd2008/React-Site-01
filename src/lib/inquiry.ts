import { z } from 'zod';
import { INQUIRY_TYPES, CHALLENGES } from './inquiry-shared';

export { INQUIRY_TYPES, CHALLENGES, isFreeEmail, CLINICAL_HINTS } from './inquiry-shared';

const trimmed = (max: number) => z.string().trim().max(max);

export const inquirySchema = z.object({
  type: z.enum(INQUIRY_TYPES),
  name: trimmed(120).min(2, 'Please enter your name.'),
  email: trimmed(200).email('Please enter a valid email address.'),
  practice: trimmed(160).min(2, 'Please enter the practice or group name.'),
  website: trimmed(300)
    .min(4, 'Please enter the practice website.')
    .refine((v) => /^(https?:\/\/)?[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(v), 'Please enter a website address such as example.com.'),
  location: trimmed(160).min(2, 'Please enter the city and state of the main office.'),
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
  submissionId: z.string().uuid(),
  startedAt: z.number().int().positive(),
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

