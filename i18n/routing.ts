import { createNavigation } from "next-intl/navigation"; // 1. Update this import
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr"],

  // Used when no locale matches
  defaultLocale: "en",
});

// 2. Update the function call here
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
