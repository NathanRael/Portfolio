import { Variants } from "motion/react";

export const appearVariant: Variants = {
  hidden: {
    opacity: 0,
    transform: "translateY(20px)",
  },
  visible: (index: number) => ({
    opacity: 1,
    transform: "translateY(0px)",
    transition: {
      delay: 0.1 * index,
      duration: 0.4,
    },
  }),
};

export const rotateVariant: Variants = {
  initial: {
    opacity: 0,
    rotate: 0,
    scale: 0.4,
  },
  rotate: (index: number) => ({
    opacity: 1,
    rotate: 360,
    scale: 1,
    transition: {
      delay: 0.2 * index,
      duration: 0.6,
    },
  }),
};
