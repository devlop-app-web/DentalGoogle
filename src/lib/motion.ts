import { Variants } from 'motion/react';

// Cinematic Luxury Cubic-Bezier Easing
export const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

// Standard Viewport Configuration
export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.25,
};

// Fade In Up (Bottom -> Up reveal)
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: LUXURY_EASE,
    },
  },
};

// Fade In From Left
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: LUXURY_EASE,
    },
  },
};

// Fade In From Right
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: LUXURY_EASE,
    },
  },
};

// Scale In (CTA / Highlight sections)
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.3,
      ease: LUXURY_EASE,
    },
  },
};

// Staggered Container
export const staggerContainer = (staggerDelay = 0.14, delayChildren = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren,
      staggerChildren: staggerDelay,
    },
  },
});

// Staggered Item Up
export const staggerItemUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: LUXURY_EASE,
    },
  },
};

// Staggered Item Left
export const staggerItemLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      ease: LUXURY_EASE,
    },
  },
};

// Staggered Item Right
export const staggerItemRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      ease: LUXURY_EASE,
    },
  },
};

// Pop In (For icons, badges, highlights)
export const popIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

// Button Hover & Tap Presets
export const buttonHover = {
  whileHover: {
    y: -3,
    scale: 1.02,
    transition: { type: 'spring', stiffness: 380, damping: 18 },
  },
  whileTap: {
    scale: 0.97,
  },
};

// Card Hover Preset
export const cardHover = {
  whileHover: {
    y: -8,
    transition: { duration: 0.4, ease: LUXURY_EASE },
  },
};

// Gentle Floating Motion for Background Ornaments
export const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      repeatType: 'mirror' as const,
      ease: 'easeInOut',
    },
  },
};
