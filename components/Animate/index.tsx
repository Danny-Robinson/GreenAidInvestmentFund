import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

const defaultVariants: Variants = {
  offscreen: {
    y: 75,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1,
    },
  },
};

export interface AnimateProps {
  variants?: Variants;
  children: ReactNode;
}

export const Animate = ({ variants, children }: AnimateProps) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={variants || defaultVariants}
    >
      {children}
    </motion.div>
  );
};
