import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const SkillItem = ({
                     icon,
                     className
                   }: {
  icon: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center z-20 justify-center size-14 md:size-18 rounded-2xl border border-background-300 from-70% bg-linear-to-b from-background-200  to-background-300 ",
        className
      )}
    >
      {icon}
    </div>
  );
};


export default SkillItem;