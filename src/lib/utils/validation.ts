import { contactFormSchema } from '@/lib/validations/contact';
import { z } from 'zod';

/**
 * Validates contact form data using Zod schema
 * @param data - The form data to validate
 * @returns Validation result with success status and errors
 */
export function validateContactForm(data: unknown) {
  try {
    const validatedData = contactFormSchema.parse(data);
    return {
      success: true,
      data: validatedData,
      errors: null,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        data: null,
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      };
    }

    return {
      success: false,
      data: null,
      errors: [{ field: 'general', message: 'Validation failed' }],
    };
  }
}

/**
 * Transforms contact form data to API request format
 * @param formData - The validated form data
 * @returns API request data
 */
export function transformContactFormToApi(formData: z.infer<typeof contactFormSchema>) {
  return {
    fullName: formData.fullName,
    email: formData.email,
    message: formData.message,
  };
}
