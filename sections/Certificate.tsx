"use client";
import Image from "next/image";
import useResizeObserver from "use-resize-observer";
import { AnimatePresence, motion, VariantLabels } from "motion/react";
import { Target } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";

export interface Certificate {
  title: string;
  image: string;
}

const CertificateSection = ({
  certificates,
}: {
  certificates: Certificate[];
}) => {
  const { width, height, ref } = useResizeObserver();
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
    <section className="flex flex-row justify-between max-[1020px]:flex-col max-[1020px]:items-center max-[1020px]:justify-center items-center w-full max-[1020px]:h-[100vh] h-[50vh] !gap-20">
      <AnimatedText
        whileInView="visible"
        initial="hidden"
        custom={1}
        className="text-subtitle max-[1020px]:text-center w-full font-medium relative"
      >
        <p>Certifications That</p>
        <p>Validate My Expertise</p>
        <Image
          className={"absolute -top-20 -z-10"}
          src={"/images/confetti-2.svg"}
          alt={"confetti"}
          width={320}
          height={320}
        />
      </AnimatedText>
      <Image
        className={"absolute right-20 "}
        src={"/images/confetti-2.svg"}
        alt={"confetti"}
        width={520}
        height={520}
      />
      <div className={"relative max-[1020px]:mt-60  bg-white-80 w-fit"}>
        {certificates.map((certificate, index) => (
          <AnimatePresence mode="wait" key={`certificate-${index}`}>
            <motion.div
              whileHover={{
                scale: 1.2,
              }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 100,
              }}
              initial={{
                x: 100,
                y: "-50%",
                opacity: 0,
              }}
              animate={getStyle(index)}
              key={`motion-${index}`}
              className="flex absolute max-[1020px]:right-1/2 -translate-y-1/2 right-60 flex-col gap-4 items-center w-full "
            >
              <div
                ref={ref}
                style={{
                  width: 420,
                  height: 296,
                }}
                className="rounded-2xl   overflow-hidden border-4 border-neutral-dark-60"
              >
                <Image
                  className="object-cover"
                  width={width || 360}
                  height={height || 360}
                  src={certificate.image}
                  alt={certificate.title}
                />
              </div>
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.h1
                    key={`title-${index}`}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 120,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    exit={{
                      y: -20,
                      opacity: 0,
                    }}
                    className="text-lead text-nowrap"
                  >
                    {certificate.title}
                  </motion.h1>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        ))}
        <Button
          onClick={prevCertificate}
          className={
            "absolute max-[1020px]:-left-60 -left-[470px] top-1/2 -translate-y-1/2 z-10"
          }
        >
          <ChevronLeft />
        </Button>
        <Button
          onClick={nextCertificate}
          className={
            "absolute -right-0 max-[1020px]:-right-60 top-1/2 -translate-y-1/2 z-10"
          }
        >
          <ChevronRight />
        </Button>
      </div>
    </section>
  );
};

export default CertificateSection;
