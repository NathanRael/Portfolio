"use client";
import { navItems } from "@/constants/navItems";
import Link from "next/link";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 * 5, duration: 0.4 }}
      viewport={{ once: true }}
      className={"flex items-center justify-between w-full"}
    >
      <Link
        href={"/"}
        className={"text-lead select-none font-md text-white-100"}
      >
        R.Natanaël
      </Link>
      <ul className={"flex max-sm:gap-3 gap-10 items-center justify-end"}>
        {navItems.map((navItem, i) => (
          <li
            className={"text-base text-white-80 hover:text-white-100"}
            key={i}
          >
            <Link scroll={true} href={navItem.link}>
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
