'use client';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * @param threshold - The percentage of the element that needs to be visible (0-1)
 * @param once - Whether to trigger animation only once
 * @returns ref and inView state
 */
export const useScrollAnimation = (threshold: number = 0.1, once: boolean = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once,
    margin: '-50px 0px -50px 0px',
  });

  return { ref, isInView };
};

/**
 * Custom hook for staggered animations
 * @param delay - Delay between each item animation
 * @param duration - Duration of each animation
 * @returns animation configuration
 */
export const useStaggerAnimation = (delay: number = 0.1, duration: number = 0.5) => {
  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: delay,
          delayChildren: 0.1,
        },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    },
  };
};

/**
 * Custom hook for parallax scrolling effect
 * @param speed - Parallax speed multiplier (0-1)
 * @returns motion value for transform
 */
export const useParallax = (speed: number = 0.5) => {
  const { ref, isInView } = useScrollAnimation(0.1, false);

  return {
    ref,
    isInView,
    speed,
  };
};

/**
 * Custom hook for typing animation
 * @param text - Text to animate
 * @param speed - Speed of typing (milliseconds per character)
 * @returns animated text and controls
 */
export const useTypingAnimation = (text: string, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, text, speed]);

  const reset = () => {
    setDisplayedText('');
    setIsComplete(false);
  };

  return { displayedText, isComplete, reset };
};

// Import React hooks
import { useEffect, useState } from 'react';
