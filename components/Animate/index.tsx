import { Box, BoxProps } from '../Box';
import { motion, Variants } from 'framer-motion';
import { ReactNode, useState } from 'react';

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
  const [hasAnimated, setHasAnimated] = useState(false);
  const onAnimationComplete = () => setHasAnimated(true);

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      onAnimationComplete={onAnimationComplete}
      variants={!hasAnimated ? variants || defaultVariants : {}}
    >
      {children}
    </motion.div>
  );
};
