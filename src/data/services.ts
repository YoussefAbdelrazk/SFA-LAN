import type { Service } from "@/types";

// Import images from assets
import Cardio from "@/assets/images/Cardio.jpg";
import fitness from "@/assets/images/fitness.jpg";
import personal from "@/assets/images/personal.jpg";
import Program from "@/assets/images/Program.png";
import Strength from "@/assets/images/Strength.jpg";
import Workout from "@/assets/images/Workout.jpg";

export const services: Service[] = [
  {
    title: "Personal Training",
    description:
      "Get customized workouts and one-on-one coaching from our expert trainers to achieve your specific fitness goals.",
    image: personal,
  },
  {
    title: "Group Fitness Classes",
    description:
      "Join our dynamic and motivating group classes, ranging from HIIT to yoga, designed for all fitness levels.",
    image: Strength,
  },
  {
    title: "Dance Workout",
    description:
      "Fun and energetic dance workouts that combine fitness with rhythm to keep you motivated and engaged.",
    image: Program,
  },
  {
    title: "Wellness Programs",
    description:
      "Comprehensive wellness programs that include stress management, mental well-being, and recovery techniques.",
    image: Workout,
  },
  {
    title: "Cardio Workouts",
    description:
      "Boost your endurance and cardiovascular health with our variety of cardio classes and equipment.",
    image: Cardio,
  },
  {
    title: "Strength Training",
    description:
      "Build muscle and increase strength with our structured training programs and state-of-the-art equipment.",
    image: fitness,
  },
];
