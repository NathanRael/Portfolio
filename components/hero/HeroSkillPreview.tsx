import SkillItem from "@/components/hero/SkillItem";
import Image from "next/image";

const HeroSkillPreview = ({
  className,
  minimized = true,
}: {
  className?: string;
  minimized?: boolean;
}) => {
  return (
    <div className={className}>
      <div className=" flex flex-row md:flex-col absolute left-1/2 max-md:-translate-x-1/2 md:left-0 lg:left-14 top-auto max-md:bottom-2 md:top-1/2 lg:top-40 items-start justify-start gap-4 md:gap-20">
        <SkillItem
          custom={0}
          icon={
            <Image
              src={"/skills/figma-logo.svg"}
              width={24}
              height={24}
              alt={"figma"}
            />
          }
        />
        <SkillItem
          custom={1}
          className="md:ms-32"
          icon={
            <Image
              src={"/skills/notion-logo.svg"}
              width={36}
              height={36}
              alt={"notion"}
            />
          }
        />

        <SkillItem
          custom={2}
          className="md:ms-6"
          icon={
            <Image
              src={"/skills/docker-logo.svg"}
              width={36}
              height={36}
              alt={"nest js"}
            />
          }
        />

        <SkillItem
          custom={3}
          className="md:ms-40"
          icon={
            <Image
              src={"/skills/git-logo.svg"}
              width={36}
              height={36}
              alt={"git"}
            />
          }
        />
      </div>
      <div className="flex flex-row md:flex-col absolute right-1/2 max-md:translate-x-1/2 md:right-0 lg:right-14 top-4 md:top-40 items-end justify-end gap-4 md:gap-20">
        <SkillItem
          custom={3}
          icon={
            <Image
              src={"/skills/next-js-logo.svg"}
              width={36}
              height={36}
              alt={"next js"}
            />
          }
        />

        <SkillItem
          custom={2}
          className="md:me-32"
          icon={
            <Image
              src={"/skills/react-logo.svg"}
              width={36}
              height={36}
              alt={"react"}
            />
          }
        />
        <SkillItem
          custom={1}
          className="md:me-6"
          icon={
            <Image
              src={"/skills/fastapi-logo.svg"}
              width={36}
              height={36}
              alt={"fastapi"}
            />
          }
        />

        <SkillItem
          custom={0}
          className="md:me-40"
          icon={
            <Image
              src={"/skills/nest-js-logo.svg"}
              width={36}
              height={36}
              alt={"git"}
            />
          }
        />
      </div>
    </div>
  );
};
export default HeroSkillPreview;
