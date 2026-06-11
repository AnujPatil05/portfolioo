'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, ReactNode } from 'react';

type RevealWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** If true, wraps children in a stagger container */
  stagger?: boolean;
};

// Use a const assertion so TypeScript infers the tuple type for `ease`
const SPRING_EASE = [0.16, 1, 0.3, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: SPRING_EASE },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export function RevealWrapper({ children, className, delay = 0, stagger = false }: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.45, delay, ease: SPRING_EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Use inside a stagger RevealWrapper for individual staggered children */
export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
