"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import "./ScrollStack.css";

export interface ScrollStackItemProps {
  itemClassName?: string;
  style?: CSSProperties;
  "data-i"?: number;
  children: ReactNode;
}

export function ScrollStackItem({
  children,
  itemClassName = "",
  style,
  ...rest
}: ScrollStackItemProps) {
  return (
    <div
      className={`stack-panel ${itemClassName}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  onActiveChange?: (index: number) => void;
}

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export default function ScrollStack({
  children,
  className = "",
  onActiveChange,
}: ScrollStackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const onActiveChangeRef = useRef(onActiveChange);
  onActiveChangeRef.current = onActiveChange;

  const items = Children.toArray(children).filter(isValidElement);
  const count = items.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const panels = Array.from(
      track.querySelectorAll<HTMLElement>(".stack-panel"),
    );
    const total = panels.length;
    if (!total) return;

    let ticking = false;

    const update = () => {
      ticking = false;

      const viewportHeight = window.innerHeight;
      const spaceTop = track.getBoundingClientRect().top + window.scrollY;
      const maxLocal = Math.max(0, track.offsetHeight - viewportHeight);
      const local = clamp(window.scrollY - spaceTop, 0, maxLocal);

      const maxSegment = Math.max(0, total - 2);
      const segment = clamp(Math.floor(local / viewportHeight), 0, maxSegment);
      const segmentProgress =
        maxLocal > 0
          ? clamp((local - segment * viewportHeight) / viewportHeight, 0, 1)
          : 0;

      panels.forEach((panel, index) => {
        let translateY: number;

        if (index === 0) {
          translateY = 0;
        } else if (index <= segment) {
          translateY = 0;
        } else if (index === segment + 1) {
          translateY = (1 - segmentProgress) * 100;
        } else {
          translateY = 100;
        }

        panel.style.transform = `translateY(${translateY}%)`;
      });

      const activeIndex =
        segmentProgress >= 0.5 ? Math.min(segment + 1, total - 1) : segment;

      onActiveChangeRef.current?.(activeIndex);
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={`stack-space ${className}`.trim()}
      ref={trackRef}
      style={{ "--n": count } as CSSProperties}
    >
      <div className="stack-viewport">
        {items.map((child, index) =>
          cloneElement(child as ReactElement<ScrollStackItemProps>, {
            "data-i": index,
          }),
        )}
      </div>
    </div>
  );
}
