"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function SmoothScroll() {
  const pathname = usePathname();
  const targetY = useRef(0);
  const isAnimating = useRef(false);
  const htmlRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname.startsWith("/studio")) return;

    gsap.registerPlugin(ScrollToPlugin);

    const html = document.documentElement;
    htmlRef.current = html;
    html.style.scrollBehavior = "auto";

    const maxScroll = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    targetY.current = window.scrollY;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetY.current += e.deltaY;
      targetY.current = Math.max(0, Math.min(targetY.current, maxScroll()));
      isAnimating.current = true;
      gsap.to(window, {
        scrollTo: { y: targetY.current },
        duration: 0.8,
        ease: "power1.out",
        overwrite: true,
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    };

    const onScroll = () => {
      if (isAnimating.current) return;
      if (Math.abs(window.scrollY - targetY.current) > 5) {
        targetY.current = window.scrollY;
      }
    };

    const onResize = () => {
      targetY.current = Math.min(targetY.current, maxScroll());
    };

    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const el = document.querySelector<HTMLElement>(hash);
      if (!el) return;

      e.preventDefault();
      window.history.pushState(null, "", hash);

      const top = el.offsetTop;
      targetY.current = top;
      isAnimating.current = true;
      gsap.to(window, {
        scrollTo: { y: top },
        duration: 0.8,
        ease: "power1.inOut",
        overwrite: true,
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("click", onAnchorClick, true);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onAnchorClick, true);
      gsap.killTweensOf(window);
      if (htmlRef.current) {
        htmlRef.current.style.scrollBehavior = "";
      }
    };
  }, []);

  return null;
}
