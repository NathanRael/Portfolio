"use client";
import Image from "next/image";
import useResizeObserver from "use-resize-observer";
import { AnimatePresence, motion, VariantLabels, Target } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import { Particles } from "@/components/ui/shadcn-io/particles";

export interface Certificate {
  title: string;
  image: string;
}

const CertificateSection = ({
  certificates,
}: {
  certificates: Certificate[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCertificate = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const getStyle = (index: number): VariantLabels | Target => {
    if (index === activeIndex) {
      return {
        x: 0,
        y: "-50%",
        opacity: 1,
        scale: 1,
        rotate: 0,
        zIndex: 3,
      };
    }

    return {
      x: 0,
      y: -(1.5 * index) - 48 + "%",
      opacity: 0.6,
      scale: 0.9,
      rotate: -1.9 * index,
      zIndex: 1,
    };
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextCertificate();
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  });

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
           <span className={"text-secondary"}>Certifications</span>  that Validate my Skills
        </AnimatedText>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={2}
          className="text-lead w-full "
        >
          A collection of certifications I’ve earned to strengthen and showcase my expertise across different areas of technology.
        </AnimatedText>
      </div>
      <InfiniteCertificateScroller certificates={certificates}/>

    </section>
  );
};

export default CertificateSection;



export function InfiniteCertificateScroller({certificates} : {certificates : Certificate[]}) {
  const scrollDuration = 20;

  return (
    <div className="bg-secondary flex items-center justify-center gap-6 overflow-hidden rounded-xl w-full h-[720px]">
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
    </div>
  );
}


function CertCard({ image, title }: { image: string; title: string }) {
  return (
    <div
      className="overflow-hidden border-4 rounded-lg border-background-300"
    >
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
