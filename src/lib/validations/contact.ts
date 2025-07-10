import { z } from 'zod';

// Arabic text regex pattern - supports Arabic letters, numbers, spaces, and common punctuation
const arabicTextRegex =
  /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\s0-9.,!?()]+$/;

// English text regex pattern
const englishTextRegex = /^[a-zA-Z\s]+$/;

// French text regex pattern
const frenchTextRegex = /^[a-zA-ZÀ-ÿ\s]+$/;

export const createContactFormSchema = (
  locale: string,
  t?: (key: string) => string
) => {
  const isArabic = locale === 'ar';
  const isFrench = locale === 'fr';

  // Choose appropriate regex based on locale
  const nameRegex = isArabic
    ? arabicTextRegex
    : isFrench
    ? frenchTextRegex
    : englishTextRegex;

  // Helper function to get validation message
  const getMessage = (key: string, fallback: string) => {
    if (t) {
      try {
        return t(`validation.${key}`);
      } catch {
        return fallback;
      }
    }
    return fallback;
  };

  return z.object({
    name: z
      .string()
      .min(
        2,
        getMessage(
          'name.minLength',
          isArabic
            ? 'يجب أن يكون الاسم على الأقل حرفين'
            : 'Name must be at least 2 characters'
        )
      )
      .max(
        50,
        getMessage(
          'name.maxLength',
          isArabic
            ? 'يجب أن يكون الاسم أقل من 50 حرفاً'
            : 'Name must be less than 50 characters'
        )
      )
      .regex(
        nameRegex,
        getMessage(
          'name.invalidFormat',
          isArabic
            ? 'يمكن أن يحتوي الاسم على الأحرف العربية والأرقام والمسافات فقط'
            : 'Name can only contain letters and spaces'
        )
      ),

    email: z
      .string()
      .min(
        1,
        getMessage(
          'email.required',
          isArabic ? 'البريد الإلكتروني مطلوب' : 'Email is required'
        )
      )
      .email(
        getMessage(
          'email.invalidFormat',
          isArabic
            ? 'يرجى إدخال عنوان بريد إلكتروني صحيح'
            : 'Please enter a valid email address'
        )
      ),

    message: z
      .string()
      .min(
        10,
        getMessage(
          'message.minLength',
          isArabic
            ? 'يجب أن تكون الرسالة على الأقل 10 أحرف'
            : 'Message must be at least 10 characters'
        )
      )
      .max(
        500,
        getMessage(
          'message.maxLength',
          isArabic
            ? 'يجب أن تكون الرسالة أقل من 500 حرف'
            : 'Message must be less than 500 characters'
        )
      )
      .regex(
        isArabic
          ? /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\s0-9.,!?()\n\r]+$/
          : /^[a-zA-ZÀ-ÿ0-9\s.,!?()\n\r]+$/,
        getMessage(
          'message.invalidFormat',
          isArabic
            ? 'يمكن أن تحتوي الرسالة على النص العربي والأرقام وعلامات الترقيم فقط'
            : 'Message can only contain letters, numbers, and punctuation'
        )
      ),
  });
};

// Default schema for backward compatibility
export const contactFormSchema = createContactFormSchema('en');

export type ContactFormData = z.infer<typeof contactFormSchema>;
