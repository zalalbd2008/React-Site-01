import { z } from 'zod';
import { INQUIRY_TYPES, CHALLENGES } from './inquiry-shared.ts';

export { INQUIRY_TYPES, CHALLENGES, isFreeEmail, CLINICAL_HINTS } from './inquiry-shared.ts';

const trimmed = (max: number, label = 'This field') =>
  z.string({ message: `${label} is required.` }).trim().max(max, `${label} is too long.`);

const optionalText = (max: number) => z.string().trim().max(max).optional().default('');
const websiteRe = /^(https?:\/\/)?[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i;

export const inquirySchema = z
  .object({
  type: z.enum(INQUIRY_TYPES, { message: 'Please choose what you would like.' }),
  name: trimmed(120, 'Your name').min(2, 'Please enter your name.'),
  email: trimmed(200, 'Email').email('Please enter a valid email address.'),
  // Practice fields are required for audit and consultation requests (checked below), optional for general requests.
  practice: optionalText(160),
  website: optionalText(300),
  location: optionalText(160),
  challenge: z.union([z.enum(CHALLENGES), z.literal('')]).optional().default(''),
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
  })
  .superRefine((v, ctx) => {
    if (v.type === 'general') {
      if (v.details.length < 10) ctx.addIssue({ code: 'custom', path: ['details'], message: 'Please describe your request.' });
      return;
    }
    if (v.practice.length < 2) ctx.addIssue({ code: 'custom', path: ['practice'], message: 'Please enter the practice or group name.' });
    if (v.website.length < 4) ctx.addIssue({ code: 'custom', path: ['website'], message: 'Please enter the practice website.' });
    else if (!websiteRe.test(v.website)) ctx.addIssue({ code: 'custom', path: ['website'], message: 'Please enter a website address such as example.com.' });
    if (v.location.length < 2) ctx.addIssue({ code: 'custom', path: ['location'], message: 'Please enter the city and state of the main office.' });
    if (!v.challenge) ctx.addIssue({ code: 'custom', path: ['challenge'], message: 'Please choose the main growth challenge.' });
  });

export type Inquiry = z.infer<typeof inquirySchema>;

