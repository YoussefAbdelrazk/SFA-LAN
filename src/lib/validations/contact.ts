import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
