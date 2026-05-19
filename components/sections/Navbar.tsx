"use client";
import { navItems } from "@/constants/navItems";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import GoogleTranslate from "@/components/shared/google-translate";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className={
        cn("fixed flex items-center px-4 md:px-[64px] app-padding max-sm:py-3 top-6 left-1/2 -translate-x-1/2 z-40 justify-between  border-background-200 " +
          "transition-all duration-300 w-full", scrolled && "top-0 border-b  bg-background/20 backdrop-blur-md "
        )
      }
    >
      <Link
        href={"/"}
        className={"shrink-0 text-lead select-none font-md text-white-100"}
        aria-label="Natanaël RALAIVOAVY home"
      >

        <div className={"relative ps-16 font-bold text-transparent max-sm:w-12 max-sm:ps-9 max-sm:text-[0px]"}>
          R.Natanaël
          <Image className={"absolute -top-8 left-0 max-sm:-top-4 max-sm:size-12"} src={"/logo.svg"} alt={"Natanaël RALAIVOAVY logo"} width={86} height={86} />
        </div>
      </Link>
      <ul className="flex min-w-0 flex-1 max-sm:gap-2 max-[420px]:gap-1 gap-10 items-center justify-end">
        {navItems.map((navItem, i) => (
          <li className="shrink-0 text-base max-sm:text-small-2 text-white-80 hover:text-white-100" key={i}>
            <Link scroll={true} href={navItem.link}>
              {navItem.name}
            </Link>
          </li>
        ))}
        <li className="shrink-0">
          <GoogleTranslate />
        </li>
      </ul>
    </motion.div>
  );
}
