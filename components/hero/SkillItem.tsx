import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { scaleVariant } from "@/lib/animationVariants";

const SkillItem = ({
  icon,
  className,
  custom
}: {
  icon: ReactNode;
  className?: string;
  custom?: number;
}) => {
  return (
    <motion.div
      className={cn(
        "flex items-center z-20 justify-center size-14 md:size-18 rounded-2xl border border-background-300 from-70% bg-linear-to-b from-background-200  to-background-300 ",
        className
      )}
      custom={custom}
      variants={scaleVariant}
      initial={"initial"}
      whileInView={"visible"}
    >
      {icon}
    </motion.div>
  );
};


export default SkillItem;