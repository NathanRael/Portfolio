"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedText from "@/components/ui/AnimatedText";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export interface Certificate {
  title: string;
  image: string;
}

const CertificateSection = ({
  certificates,
}: {
  certificates: Certificate[];
}) => {
  const t = useTranslations("Certificate");
  return (
    <section className="flex flex-row  relative justify-between max-[1020px]:flex-col max-[1020px]:items-center max-[1020px]:justify-center items-center w-full max-[1020px]:h-screen h-[70vh] gap-10 lg:gap-20">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className={"mb-20 text-start pt-6 space-y-4 max-w-[500px] "}>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={1}
          className="text-subtitle font-bold w-full"
        >
          {t.rich("subtitle", {
            secondary: (chunks) => (
              <span className="text-secondary">{chunks}</span>
            ),
          })}
        </AnimatedText>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={2}
          className="text-lead w-full "
        >
          {t("description")}
        </AnimatedText>
      </div>
      <InfiniteCertificateScroller certificates={certificates} />
    </section>
  );
};

export default CertificateSection;

export function InfiniteCertificateScroller({
  certificates,
}: {
  certificates: Certificate[];
}) {
  const scrollDuration = 20;
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity }}
      className="bg-secondary flex items-center justify-center gap-6 overflow-hidden rounded-xl w-full h-[720px]"
    >
      <div className="flex flex-col gap-2 rotate-12 overflow-hidden">
        <div
          className="flex  flex-col gap-2"
          style={{
            animation: `scrollDown ${scrollDuration}s linear infinite`,
          }}
        >
          {[...certificates, ...certificates, ...certificates].map((c, i) => (
            <CertCard key={i} {...c} />
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN (bottom → top) */}
      <div className="flex flex-col gap-2 max-lg:hidden rotate-12 overflow-hidden">
        <div
          className="flex flex-col gap-2"
          style={{
            animation: `scrollUp ${scrollDuration}s linear infinite`,
          }}
        >
          {[...certificates, ...certificates, ...certificates].map((c, i) => (
            <CertCard key={i} {...c} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CertCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="overflow-hidden border-4 rounded-lg border-background-300">
      <Image
        className="object-cover w-full h-full"
        width={420}
        height={296}
        src={image}
        alt={title}
      />
    </div>
  );
}
