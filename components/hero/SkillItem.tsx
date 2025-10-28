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
        "flex  items-center justify-center size-16 rounded-2xl bg-linear-to-b from-background-200 to-background-100 ",
        className
      )}
    >
      {icon}
    </div>
  );
};


export default SkillItem;