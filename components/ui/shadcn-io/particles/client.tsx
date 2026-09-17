"use client";

import dynamic from "next/dynamic";

export const Particles = dynamic(
  () => import("@/components/ui/shadcn-io/particles").then(mod => ({ default: mod.Particles })),
  {
    ssr: false,
    loading: () => null,
  }
);
