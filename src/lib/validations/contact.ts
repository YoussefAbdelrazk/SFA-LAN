import { z } from 'zod';

// Base schema without translations for type inference
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, 'Name can only contain letters and spaces'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must not exceed 500 characters'),
});

// Type inference from schema
export type ContactFormData = z.infer<typeof contactFormSchema>;

// API request/response types






// Localized schema factory
export const createContactFormSchema = (locale: string, t: (key: string) => string) => {
  return z.object({
    fullName: z
      .string()
      .min(2, t('fullName.minLength'))
      .max(50, t('fullName.maxLength'))
      .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, t('fullName.invalidFormat')),
    email: z.string().min(1, t('email.required')).email(t('email.invalidFormat')),
    message: z.string().min(10, t('message.minLength')).max(500, t('message.maxLength')),
  });
};
