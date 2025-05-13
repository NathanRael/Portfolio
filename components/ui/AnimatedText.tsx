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
}


const availableVariants: Record<string, Variants> = {
    'appear': appearVariant,
}

const AnimatedText = ({children, className, variants = 'appear', ...props}: AnimatedTextProps) => {
    return (
        <AnimatePresence>
            <motion.h1 className={className} variants={availableVariants[variants]} viewport={{once: false}} {...props}>
                {children}
            </motion.h1>
        </AnimatePresence>
    );
};

export default AnimatedText