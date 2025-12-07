import { Variants } from "motion/react";

export const appearVariant: Variants = {
  hidden: {
    opacity: 0,
    transform: "translateY(40px)",
  },
  fromL: (index: number) => ({
    opacity: 0,
    transform: "translateX(-50px)",
    transition: {
      delay: 0.15 * index,
      duration: 0.5,
    },
  }),
  fromR: (index: number) => ({
    opacity: 0,
    transform: "translateX(50px)",
    transition: {
      delay: 0.15 * index,
      duration: 0.5,
    },
  }),
  fromB: (index: number) => ({
    opacity: 0,
    transform: "translateY(40px)",
    transition: {
      delay: 0.15 * index,
      duration: 0.5,
    },
  }),
  visible: (index: number) => ({
    opacity: 1,
    transform: "translateY(0px)",
    transition: {
      delay: 0.15 * index,
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

export const scaleVariant: Variants = {
  initial: {
    // opacity: 0,
    scale: 0,
  },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2 * index,
      duration: 0.3,
    },
  }),
};
