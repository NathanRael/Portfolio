"use client";
import Image from "next/image";
import useResizeObserver from "use-resize-observer";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCertificate = () => {
    if (currentIndex < certificates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCertificate = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getInitial = (index: number) => {
    if (index === currentIndex) {
      return {
        x: 0,
        y: 0,
        rotate: 0,
        opactity: 1,
      };
    }
    return {
      rotate: -1.2 * index,
      y: -5.2 * index,
    };
  };

  useEffect(() => {
    const timeId = setInterval(() => {
      nextCertificate();
    }, 2000);

    return () => clearInterval(timeId);
  }, []);

  return (
    <section className="section !flex !flex-row !justify-between items-center w-full !gap-20">
      <div className="text-subtitle">
        <p>Certifications That</p>
        <p>Validate My Expertise</p>
      </div>
      <div className="relative w-[420px] h-[350px]">
        <AnimatePresence mode="wait">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={getInitial(index)}
              animate={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col gap-2 items-center w-full absolute inset-0 "
            >
              <div
                ref={ref}
                style={{
                  width: 420,
                  height: 296,
                }}
                className="rounded-2xl overflow-hidden border-4 border-neutral-dark-60"
              >
                <Image
                  className="object-cover"
                  width={width || 360}
                  height={height || 360}
                  src={certificate.image}
                  alt={certificate.title}
                />
              </div>
              {currentIndex === index && (
                <AnimatePresence>
                  <motion.h1
                    initial={{
                      y: 30,
                      opacity: 0,
                    }}
                    transition={{
                      delay: 0.1,
                      duration: 0.2,
                      type: "spring",
                      stiffness: 100,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    className="text-lead"
                  >
                    {certificate.title}
                  </motion.h1>
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Navigation buttons */}
        {currentIndex > 0 && (
          <button
            onClick={prevCertificate}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
          >
            ←
          </button>
        )}

        {currentIndex < certificates.length - 1 && (
          <button
            onClick={nextCertificate}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
          >
            →
          </button>
        )}

        {/* Dots indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
