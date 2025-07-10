import { createContactFormSchema } from './contact';

describe('Contact Form Validation - Arabic', () => {
  const arabicSchema = createContactFormSchema('ar');

  describe('Name field validation', () => {
    it('should accept valid Arabic names', () => {
      const validNames = [
        'أحمد محمد',
        'فاطمة علي',
        'محمد بن أحمد',
        'عائشة بنت عمر',
        'عبدالله بن محمد',
      ];

      validNames.forEach((name) => {
        const result = arabicSchema.safeParse({
          name,
          email: 'test@example.com',
          message: 'Test message with at least 10 characters',
        });
        expect(result.success).toBe(true);
      });
    });

    it('should reject names with invalid characters', () => {
      const invalidNames = [
        'John123', // English with numbers
        'محمد@123', // Arabic with @ symbol
        'أحمد#محمد', // Arabic with # symbol
        '123456', // Only numbers
        'أحمد محمد!', // Arabic with ! at end
      ];

      invalidNames.forEach((name) => {
        const result = arabicSchema.safeParse({
          name,
          email: 'test@example.com',
          message: 'Test message with at least 10 characters',
        });
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0].message).toContain(
            'يمكن أن يحتوي الاسم على الأحرف العربية والأرقام والمسافات فقط'
          );
        }
      });
    });

    it('should reject names that are too short', () => {
      const result = arabicSchema.safeParse({
        name: 'أ',
        email: 'test@example.com',
        message: 'Test message with at least 10 characters',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain(
          'يجب أن يكون الاسم على الأقل حرفين'
        );
      }
    });

    it('should reject names that are too long', () => {
      const longName = 'أ'.repeat(51);
      const result = arabicSchema.safeParse({
        name: longName,
        email: 'test@example.com',
        message: 'Test message with at least 10 characters',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain(
          'يجب أن يكون الاسم أقل من 50 حرفاً'
        );
      }
    });
  });

  describe('Message field validation', () => {
    it('should accept valid Arabic messages', () => {
      const validMessages = [
        'أريد معرفة المزيد عن برامج التدريب الشخصي',
        'هل يمكنني الحصول على استشارة مجانية؟',
        'أحتاج مساعدة في اختيار البرنامج المناسب لي',
        'شكراً لكم على هذه الخدمة المميزة',
      ];

      validMessages.forEach((message) => {
        const result = arabicSchema.safeParse({
          name: 'أحمد محمد',
          email: 'test@example.com',
          message,
        });
        expect(result.success).toBe(true);
      });
    });

    it('should reject messages that are too short', () => {
      const result = arabicSchema.safeParse({
        name: 'أحمد محمد',
        email: 'test@example.com',
        message: 'مرحبا',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain(
          'يجب أن تكون الرسالة على الأقل 10 أحرف'
        );
      }
    });

    it('should reject messages with invalid characters', () => {
      const invalidMessages = [
        'مرحبا @ العالم', // Contains @
        'أهلا وسهلا # بكم', // Contains #
        'شكرا لكم $ كثيرا', // Contains $
      ];

      invalidMessages.forEach((message) => {
        const result = arabicSchema.safeParse({
          name: 'أحمد محمد',
          email: 'test@example.com',
          message,
        });
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0].message).toContain(
            'يمكن أن تحتوي الرسالة على النص العربي والأرقام وعلامات الترقيم فقط'
          );
        }
      });
    });
  });

  describe('Email field validation', () => {
    it('should accept valid email addresses', () => {
      const validEmails = [
        'test@example.com',
        'user.name@domain.co.uk',
        'user+tag@example.org',
      ];

      validEmails.forEach((email) => {
        const result = arabicSchema.safeParse({
          name: 'أحمد محمد',
          email,
          message: 'Test message with at least 10 characters',
        });
        expect(result.success).toBe(true);
      });
    });

    it('should reject invalid email addresses', () => {
      const invalidEmails = [
        'invalid-email',
        '@example.com',
        'user@',
        'user@.com',
      ];

      invalidEmails.forEach((email) => {
        const result = arabicSchema.safeParse({
          name: 'أحمد محمد',
          email,
          message: 'Test message with at least 10 characters',
        });
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0].message).toContain(
            'يرجى إدخال عنوان بريد إلكتروني صحيح'
          );
        }
      });
    });
  });
});
