'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';
import { useScrollAnimation } from './hooks';
import {
  bounceIn,
  fadeIn,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  hoverLift,
  hoverScale,
  imageReveal,
  pageTransition,
  rotateIn,
  scaleIn,
  scaleInUp,
  slideInFromLeft,
  slideInFromRight,
  staggerContainer,
  staggerItem,
  textReveal,
} from './variants';

// Animation variant types
type AnimationVariant =
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'fadeIn'
  | 'scaleIn'
  | 'scaleInUp'
  | 'slideInFromLeft'
  | 'slideInFromRight'
  | 'bounceIn'
  | 'rotateIn'
  | 'textReveal'
  | 'imageReveal';

// Animation component props
interface AnimationProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  trigger?: 'scroll' | 'hover' | 'mount';
  threshold?: number;
  once?: boolean;
  className?: string;
}

// Animation variant mapping
const animationVariants = {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeIn,
  scaleIn,
  scaleInUp,
  slideInFromLeft,
  slideInFromRight,
  bounceIn,
  rotateIn,
  textReveal,
  imageReveal,
};

/**
 * Reusable animation wrapper component
 */
export const Animate = forwardRef<HTMLDivElement, AnimationProps>(
  (
    {
      children,
      variant = 'fadeInUp',
      delay = 0,
      duration = 0.6,
      trigger = 'scroll',
      threshold = 0.1,
      once = true,
      className = '',
      ...props
    },
    ref,
  ) => {
    const { ref: scrollRef, isInView } = useScrollAnimation(threshold, once);

    const selectedVariant = animationVariants[variant];

    // Customize animation with delay and duration
    const customVariant = {
      ...selectedVariant,
      visible: {
        ...selectedVariant.visible,
        transition: {
          ...(typeof selectedVariant.visible === 'object' && 'transition' in selectedVariant.visible
            ? selectedVariant.visible.transition
            : {}),
          delay,
          duration,
        },
      },
    };

    const getAnimationProps = () => {
      switch (trigger) {
        case 'scroll':
          return {
            ref: ref || scrollRef,
            variants: customVariant,
            initial: 'hidden',
            animate: isInView ? 'visible' : 'hidden',
          };
        case 'hover':
          return {
            ref,
            variants: customVariant,
            initial: 'rest',
            whileHover: 'hover',
          };
        case 'mount':
          return {
            ref,
            variants: customVariant,
            initial: 'hidden',
            animate: 'visible',
          };
        default:
          return {
            ref,
            variants: customVariant,
            initial: 'hidden',
            animate: 'visible',
          };
      }
    };

    return (
      <motion.div {...getAnimationProps()} className={className} {...props}>
        {children}
      </motion.div>
    );
  },
);

Animate.displayName = 'Animate';

/**
 * Stagger container for animating lists
 */
interface StaggerContainerProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  ({ children, delay = 0.1, className = '', ...props }, ref) => {
    const { ref: scrollRef, isInView } = useScrollAnimation(0.1, true);

    const containerVariants = {
      ...staggerContainer,
      visible: {
        ...staggerContainer.visible,
        transition: {
          ...(typeof staggerContainer.visible === 'object' &&
          'transition' in staggerContainer.visible
            ? staggerContainer.visible.transition
            : {}),
          staggerChildren: delay,
        },
      },
    };

    return (
      <motion.div
        ref={ref || scrollRef}
        variants={containerVariants}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

StaggerContainer.displayName = 'StaggerContainer';

/**
 * Stagger item for use within StaggerContainer
 */
interface StaggerItemProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  className?: string;
}

export const StaggerItem = forwardRef<HTMLDivElement, StaggerItemProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <motion.div ref={ref} variants={staggerItem} className={className} {...props}>
        {children}
      </motion.div>
    );
  },
);

StaggerItem.displayName = 'StaggerItem';

/**
 * Hover animation component
 */
interface HoverAnimationProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  type?: 'scale' | 'lift';
  className?: string;
}

export const HoverAnimation = forwardRef<HTMLDivElement, HoverAnimationProps>(
  ({ children, type = 'scale', className = '', ...props }, ref) => {
    const hoverVariant = type === 'scale' ? hoverScale : hoverLift;

    return (
      <motion.div
        ref={ref}
        variants={hoverVariant}
        initial='rest'
        whileHover='hover'
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

HoverAnimation.displayName = 'HoverAnimation';

/**
 * Page transition wrapper
 */
interface PageTransitionProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  className?: string;
}

export const PageTransition = forwardRef<HTMLDivElement, PageTransitionProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={pageTransition}
        initial='initial'
        animate='animate'
        exit='exit'
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

PageTransition.displayName = 'PageTransition';

/**
 * Text reveal animation
 */
interface TextRevealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const TextReveal = forwardRef<HTMLDivElement, TextRevealProps>(
  ({ children, delay = 0, className = '', ...props }, ref) => {
    const { ref: scrollRef, isInView } = useScrollAnimation(0.1, true);

    const customVariant = {
      ...textReveal,
      visible: {
        ...textReveal.visible,
        transition: {
          ...(typeof textReveal.visible === 'object' && 'transition' in textReveal.visible
            ? textReveal.visible.transition
            : {}),
          delay,
        },
      },
    };

    return (
      <motion.div
        ref={ref || scrollRef}
        variants={customVariant}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

TextReveal.displayName = 'TextReveal';

/**
 * Image reveal animation
 */
interface ImageRevealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const ImageReveal = forwardRef<HTMLDivElement, ImageRevealProps>(
  ({ children, delay = 0, className = '', ...props }, ref) => {
    const { ref: scrollRef, isInView } = useScrollAnimation(0.1, true);

    const customVariant = {
      ...imageReveal,
      visible: {
        ...imageReveal.visible,
        transition: {
          ...(typeof imageReveal.visible === 'object' && 'transition' in imageReveal.visible
            ? imageReveal.visible.transition
            : {}),
          delay,
        },
      },
    };

    return (
      <motion.div
        ref={ref || scrollRef}
        variants={customVariant}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

ImageReveal.displayName = 'ImageReveal';
