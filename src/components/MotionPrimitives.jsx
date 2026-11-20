import React from 'react';
import { motion } from 'motion/react';

export const CAELESTIA_SPRING = {
  type: 'spring',
  stiffness: 420,
  damping: 28,
  mass: 0.85,
};

export const M3E_SURFACE_SPRING = {
  type: 'spring',
  stiffness: 320,
  damping: 26,
};

export function M3EPageTransition({ children, viewKey }) {
  return (
    <motion.div
      key={viewKey}
      initial={{ opacity: 0, y: 16, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.99 }}
      transition={M3E_SURFACE_SPRING}
    >
      {children}
    </motion.div>
  );
}

export function MicroActionButton({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  title,
}) {
  return (
    <motion.button
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? undefined : { scale: 1.025, y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.94 }}
      transition={CAELESTIA_SPRING}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export function StaggerCardGrid({ children, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.055,
            delayChildren: 0.04,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerCardItem = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: M3E_SURFACE_SPRING,
  },
};