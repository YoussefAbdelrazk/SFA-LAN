'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

/**
 * Parallax scrolling component
 */
interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const Parallax = ({ children, speed = 0.5, className = '' }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

/**
 * Floating animation component
 */
interface FloatingProps {
  children: ReactNode;
  intensity?: number;
  duration?: number;
  className?: string;
}

export const Floating = ({
  children,
  intensity = 0.1,
  duration = 3,
  className = '',
}: FloatingProps) => {
  return (
    <motion.div
      animate={{
        y: [0, -20 * intensity, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Magnetic hover effect component
 */
interface MagneticProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
}

export const Magnetic = ({ children, intensity = 0.3, className = '' }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: 'transform 0.1s ease-out' }}
    >
      {children}
    </div>
  );
};

/**
 * Reveal animation with custom trigger
 */
interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // Simple scroll-based animation without useScroll for now

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 60, opacity: 0 };
      case 'down':
        return { y: -60, opacity: 0 };
      case 'left':
        return { x: 60, opacity: 0 };
      case 'right':
        return { x: -60, opacity: 0 };
      default:
        return { y: 60, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
        return { y: 0, opacity: 1 };
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
        return { x: 0, opacity: 1 };
      case 'right':
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={getAnimatePosition()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Typewriter effect component
 */
interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export const Typewriter = ({ text, speed = 50, delay = 0, className = '' }: TypewriterProps) => {
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

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={className}
    >
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
};

/**
 * Gradient text animation
 */
interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export const GradientText = ({ children, className = '' }: GradientTextProps) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-[#F7F225] to-[#E8CE23] bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      {children}
    </motion.span>
  );
};

/**
 * Morphing shape animation
 */
interface MorphingShapeProps {
  children: ReactNode;
  className?: string;
}

export const MorphingShape = ({ children, className = '' }: MorphingShapeProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        borderRadius: ['20%', '50%', '20%'],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Pulse animation
 */
interface PulseProps {
  children: ReactNode;
  intensity?: number;
  duration?: number;
  className?: string;
}

export const Pulse = ({ children, intensity = 0.05, duration = 2, className = '' }: PulseProps) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1 + intensity, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Import React hooks
import { useEffect, useState } from 'react';
