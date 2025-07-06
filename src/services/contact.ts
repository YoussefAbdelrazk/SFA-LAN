import { ContactFormData } from "@/lib/validations/contact";

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ContactSubmissionResult> {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here you would typically make an API call to your backend
    // Example:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    
    // For now, we'll simulate a successful submission
    console.log("Contact form submitted:", data);
    
    // Simulate occasional failures for testing
    if (Math.random() < 0.1) {
      throw new Error("Network error occurred");
    }
    
    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again.",
    };
  }
}
