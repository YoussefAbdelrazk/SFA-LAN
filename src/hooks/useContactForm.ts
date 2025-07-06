import { ContactFormData, contactFormSchema } from "@/lib/validations/contact";
import { ContactSubmissionResult, submitContactForm } from "@/services/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<ContactSubmissionResult | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange", // Validate on change for better UX
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const result = await submitContactForm(data);
      setSubmissionResult(result);

      if (result.success) {
        form.reset(); // Reset form on successful submission
      }
    } catch {
      setSubmissionResult({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearSubmissionResult = () => {
    setSubmissionResult(null);
  };

  return {
    form,
    isSubmitting,
    submissionResult,
    onSubmit: form.handleSubmit(onSubmit),
    clearSubmissionResult,
    // Expose form methods for convenience
    register: form.register,
    formState: form.formState,
    watch: form.watch,
    setValue: form.setValue,
    getValues: form.getValues,
  };
}
