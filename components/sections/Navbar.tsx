"use client";
import { navItems } from "@/constants/navItems";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import GoogleTranslate from "@/components/shared/google-translate";
import { Button } from "@/components/ui/button";
import { Menu, X, Inbox } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileOpenRef = useRef(mobileOpen);
  mobileOpenRef.current = mobileOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpenRef.current) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openMobileMenu = () => {
    setMobileOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className={cn(
          "fixed flex items-center px-4 md:px-[64px] app-padding max-sm:py-3 top-6 left-1/2 -translate-x-1/2 z-40 border-background-200 transition-all duration-300 w-full",
          scrolled && "top-0 border-b bg-background/20 backdrop-blur-md"
        )}
      >
        <div className="flex w-full items-center justify-between">
          <Link
            href={"/"}
            className={"shrink-0 text-lead select-none font-md text-white-100"}
            aria-label="Natanaël RALAIVOAVY home"
          >
            <div className={"relative ps-16 font-bold text-white max-sm:w-12 max-sm:ps-9 max-sm:text-[0px]"}>
              R.Natanaël
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((navItem, i) => (
              <li className="shrink-0 text-base text-white-80 hover:text-white-100" key={i}>
                <Link scroll={true} href={navItem.link}>
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-3">
            <GoogleTranslate />
            <Button asChild size="sm" variant="default" className="h-10 px-4">
              <Link href={"#contact"}>
                <Inbox size={16} />
                Get in touch
              </Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white-100"
            onClick={() => openMobileMenu()}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background md:hidden flex flex-col p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-white-100 font-bold text-lg">R.Natanaël</span>
              <button
                className="p-1 text-white-100"
                onClick={() => closeMobileMenu()}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="flex-1 flex flex-col items-center justify-center gap-6">
              {navItems.map((navItem, i) => (
                <li key={i}>
                  <Link
                    scroll={true}
                    href={navItem.link}
                    className="text-3xl font-semibold text-white-80 hover:text-white-100 transition-colors"
                    onClick={() => closeMobileMenu()}
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 pb-8">
              <GoogleTranslate />
              <Button asChild size="lg" variant="default" className="flex-1">
                <Link href={"#contact"} onClick={() => closeMobileMenu()}>
                  <Inbox size={20} />
                  Get in touch
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
