import type { Testimonial } from "@/types";

// Import testimonial images
import john from "@/assets/images/john.jpg";
import sarah from "@/assets/images/sarah.jpg";
import mike from "@/assets/images/mike.jpg";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Fitness Enthusiast",
    image: john,
    rating: 5,
    content: "Joining FitLife Studio was the best decision I ever made for my health. The trainers are incredibly supportive, and the personalized programs have helped me achieve results I never thought possible.",
    memberSince: "2021"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Wellness Coach",
    image: sarah,
    rating: 5,
    content: "The group classes are so much fun and motivating. I have lost 20 pounds and gained a ton of confidence. The community here is amazing and everyone supports each other.",
    memberSince: "2022"
  },
  {
    id: 3,
    name: "Mike Wilson",
    role: "Personal Trainer",
    image: mike,
    rating: 5,
    content: "As a personal trainer myself, I can say that FitLife Studio offers top-notch facilities and programs. The variety of workouts keeps things interesting and challenging.",
    memberSince: "2020"
  }
];
