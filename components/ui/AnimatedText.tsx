"use client"

import {AnimatePresence, motion, TargetAndTransition, VariantLabels} from "motion/react"
import {appearVariant} from "@/lib/animationVariants";
import {Variants} from "motion/react";

export type animatedTextVariants = 'appear'


  type AnimatedTextProps = {
      children: React.ReactNode;
      className?: string;
      custom: number;
      variants?: animatedTextVariants;
      whileInView: VariantLabels | TargetAndTransition;
      initial?: boolean | VariantLabels;
      viewport?: { once?: boolean; margin?: string };
  }


const availableVariants: Record<string, Variants> = {
    'appear': appearVariant,
}

const AnimatedText = ({children, className, variants = 'appear', ...props}: AnimatedTextProps) => {
    return (
        <AnimatePresence>
            <motion.div className={className} variants={availableVariants[variants]} viewport={{once: true, margin: "-100px"}} {...props}>
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatedText