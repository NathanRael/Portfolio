"use client";
import { navItems } from "@/constants/navItems";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import GoogleTranslate from "@/components/shared/google-translate";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import { Menu, X, Inbox } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileOpenRef = useRef(mobileOpen);
  mobileOpenRef.current = mobileOpen;

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const langQuery = lang ? `?lang=${lang}` : "";

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

  if (pathname.startsWith("/studio")) {
    return null;
  }

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
            href={`/${langQuery}`}
            className={"shrink-0 text-lead select-none font-md text-white-100"}
            aria-label="Natanaël RALAIVOAVY home"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="flex items-center gap-2 md:gap-3">
              <Logo className="size-8 md:size-10 shrink-0" />
              <span className="font-bold text-white text-sm md:text-base">
                Natanaël
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((navItem, i) => (
              <li className="shrink-0 text-base text-white-80 hover:text-white-100" key={i}>
                <Link scroll={true} href={navItem.link} className="notranslate" translate="no">
                  <span className="manual-translation-en">{navItem.name}</span>
                  <span className="manual-translation-fr">{navItem.nameFr}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <GoogleTranslate />
            <div className="hidden md:flex">
              <Button asChild size="sm" variant="default" className="h-10 px-4">
                <Link href={"#contact"}>
                  <Inbox size={16} />
                  <span className="notranslate" translate="no">
                    <span className="manual-translation-en">Get in touch</span>
                    <span className="manual-translation-fr">Me contacter</span>
                  </span>
                </Link>
              </Button>
            </div>
            <button
              className="md:hidden p-2 text-white-100"
              onClick={() => openMobileMenu()}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
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
            <div className="flex justify-end">
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
                    className="text-3xl font-semibold text-white-80 hover:text-white-100 transition-colors notranslate"
                    translate="no"
                    onClick={() => closeMobileMenu()}
                  >
                    <span className="manual-translation-en">{navItem.name}</span>
                    <span className="manual-translation-fr">{navItem.nameFr}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex justify-center pb-8">
              <Button asChild size="lg" variant="default">
                <Link href={"#contact"} onClick={() => closeMobileMenu()}>
                  <Inbox size={20} />
                  <span className="notranslate" translate="no">
                    <span className="manual-translation-en">Get in touch</span>
                    <span className="manual-translation-fr">Me contacter</span>
                  </span>
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
