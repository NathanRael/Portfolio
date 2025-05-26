"use client";
import Image from "next/image";
import useResizeObserver from "use-resize-observer";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface Certificate {
  title: string;
  image: string;
}

const CertificateSection = ({
  certificates,
}: {
  certificates: Certificate[];
}) => {
  const autoAnimationDuration = 4000;
  const { ref } = useResizeObserver();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCertificate = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setActiveIndex(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextCertificate();
    }, autoAnimationDuration);

    return () => clearInterval(intervalId);
  }, []);

  const getCardStyle = (index: number) => {
    const isActive = index === activeIndex;
    const offset = index - activeIndex;

    if (isActive) {
      return {
        zIndex: 30,
        scale: 1,
        y: 0,
        rotateZ: 0,
        opacity: 1,
      };
    }

    // Cards behind the active one
    if (offset > 0) {
      return {
        zIndex: 30 - offset,
        scale: 1 - offset * 0.05,
        y: offset * 20,
        rotateZ: offset * 2,
        opacity: 0.8 - offset * 0.2,
      };
    }

    // Cards in front (previous cards)
    const absOffset = Math.abs(offset);
    return {
      zIndex: 30 - absOffset,
      scale: 1 - absOffset * 0.05,
      y: absOffset * 20,
      rotateZ: offset * 2,
      opacity: 0.8 - absOffset * 0.2,
    };
  };

  return (
    <section className="section !flex !flex-row !justify-between !items-center h-[80vh] w-full !gap-20">
      <div className="text-subtitle relative">
        <p>Certifications That</p>
        <p>Validate My Expertise</p>
        <Image
          className="absolute -z-10 -top-20 -left-10"
          src={"/images/confetti-2.svg"}
          width={820}
          height={820}
          alt="confetti"
        />
      </div>
      <div className="relative w-[420px]  h-[320px] perspective-1000">
        <Image
          className="absolute -top-20 -left-10"
          src={"/images/confetti-1.svg"}
          width={512}
          height={512}
          alt="confetti"
        />
        {/* Stacked Cards */}
        <div className="relative w-full h-full">
          {certificates.map((certificate, index) => {
            const style = getCardStyle(index);
            return (
              <motion.div
                key={index}
                className="absolute inset-0 cursor-pointer"
                style={{
                  zIndex: style.zIndex,
                }}
                animate={{
                  scale: style.scale,
                  y: style.y,
                  rotateZ: style.rotateZ,
                  opacity: style.opacity,
                  transition: {
                    duration: 1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                onClick={() => setActiveIndex(index)}
                whileHover={{
                  scale: index === activeIndex ? 1.02 : style.scale + 0.02,
                }}
              >
                <div className="flex flex-col gap-4 items-center h-full">
                  <div
                    ref={index === activeIndex ? ref : undefined}
                    className="w-[380px] h-[280px] rounded-2xl overflow-hidden border-4 border-neutral-dark-60 shadow-2xl bg-white"
                  >
                    <Image
                      className="object-cover w-full h-full"
                      width={380}
                      height={280}
                      src={certificate.image}
                      alt={certificate.title}
                      priority={index === activeIndex}
                    />
                  </div>
                  {index === activeIndex && (
                    <motion.h1
                      className="text-lead text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 10 }}
                      transition={{ delay: 0.3 }}
                    >
                      {certificate.title}
                    </motion.h1>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation buttons */}
        <Button
          variant={"secondary"}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30"
          onClick={() => {
            prevCertificate();
          }}
        >
          <ArrowLeft />
        </Button>
        <Button
          value={"secondary"}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30"
          onClick={() => {
            nextCertificate();
          }}
        >
          <ArrowRight />
        </Button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
