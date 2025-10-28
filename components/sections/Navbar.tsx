"use client";
import { navItems } from "@/constants/navItems";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
        cn("fixed flex items-center px-4 md:px-[64px] app-padding top-6 left-1/2 -translate-x-1/2 z-40 justify-between  border-background-200 " +
          "transition-all duration-300 w-full", scrolled && "top-0 border-b  bg-background/20 backdrop-blur-md "
          )
      }
    >
      <Link
        href={"/"}
        className={"text-lead select-none font-md text-white-100"}
      >
        R.Natanaël
      </Link>
      <ul className="flex max-sm:gap-3 gap-10 items-center justify-end">
        {navItems.map((navItem, i) => (
          <li className="text-base text-white-80 hover:text-white-100" key={i}>
            <Link scroll={true} href={navItem.link}>
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
