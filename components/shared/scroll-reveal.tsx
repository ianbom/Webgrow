"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealVariant =
  | "hero"
  | "fade-up"
  | "slide-left"
  | "slide-right"
  | "scale"
  | "clip"
  | "blur";

const hiddenClasses: Record<RevealVariant, string> = {
  hero: "translate-y-5 scale-[0.99] opacity-0",
  "fade-up": "translate-y-8 opacity-0",
  "slide-left": "-translate-x-10 opacity-0",
  "slide-right": "translate-x-10 opacity-0",
  scale: "translate-y-5 scale-[0.96] opacity-0",
  clip: "translate-y-6 opacity-0 [clip-path:inset(0_0_18%_0)]",
  blur: "translate-y-5 opacity-0 blur-sm",
};

const visibleClasses =
  "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0 [clip-path:inset(0_0_0_0)]";

export function ScrollReveal({
  children,
  variant = "fade-up",
  immediate = false,
}: {
  children: ReactNode;
  variant?: RevealVariant;
  immediate?: boolean;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    setReady(true);

    if (immediate) {
      const animationFrame = window.requestAnimationFrame(() =>
        setVisible(true),
      );

      return () => window.cancelAnimationFrame(animationFrame);
    }

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [immediate]);

  const revealClass = ready
    ? visible
      ? visibleClasses
      : hiddenClasses[variant]
    : "";

  return (
    <div
      ref={elementRef}
      className={`transition-[opacity,transform,filter,clip-path] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform] ${revealClass}`}
    >
      {children}
    </div>
  );
}
