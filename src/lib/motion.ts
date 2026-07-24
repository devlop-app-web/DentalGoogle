import { Variants } from 'motion/react';

// Smooth Premium Ease-Out Curve
export const SMOOTH_EASE = [0.25, 1, 0.5, 1] as const;

// Standard Viewport Trigger Configuration (Triggers once when entering viewport)
export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.15,
};

// Left-side content slide in from left + fade in
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: SMOOTH_EASE,
    },
  },
};

// Right-side content slide in from right + fade in
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: SMOOTH_EASE,
    },
  },
};

// Center content fade up + scale slightly
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: SMOOTH_EASE,
    },
  },
};

// Center content scale in
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: SMOOTH_EASE,
    },
  },
};

// Image zoom in + fade in
export const imageZoomFade: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: SMOOTH_EASE,
    },
  },
};

// Button fade up (slightly delayed after content)
export const buttonFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15,
      ease: SMOOTH_EASE,
    },
  },
};

// Staggered Cards Container (100ms staggered delay between children)
export const staggerContainer = (staggerDelay = 0.1, delayChildren = 0.05): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren,
      staggerChildren: staggerDelay,
    },
  },
});

// Staggered Card Item
export const staggerCard: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: SMOOTH_EASE,
    },
  },
};

// Legacy compatibility variants
export const staggerItemUp = staggerCard;
export const staggerItemLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: SMOOTH_EASE } },
};
export const staggerItemRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: SMOOTH_EASE } },
};

// Pop In (For icons, badges, highlights)
export const popIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: SMOOTH_EASE,
    },
  },
};

// Button Hover & Tap Presets
export const buttonHover = {
  whileHover: {
    y: -2,
    scale: 1.02,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  whileTap: {
    scale: 0.98,
  },
};

// Card Hover Preset
export const cardHover = {
  whileHover: {
    y: -6,
    transition: { duration: 0.3, ease: SMOOTH_EASE },
  },
};

// Gentle Floating Motion for Background Ornaments
export const floatAnimation = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 1.5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: 'mirror' as const,
      ease: 'easeInOut',
    },
  },
};

