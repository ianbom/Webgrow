"use client";

import { useEffect, useRef } from "react";

export function TechMarquee({ items }: { items: readonly string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animation = track.animate([{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }], { duration: 28000, iterations: Infinity, easing: "linear" });
    return () => animation.cancel();
  }, []);

  return <div className="mt-[120px] overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)] max-[640px]:mt-16 max-[640px]:py-[18px]" aria-label="Teknologi yang digunakan"><div ref={trackRef} className="flex w-max items-center"><div className="flex items-center">{[...items, ...items].map((item, index) => <span className="flex items-center whitespace-nowrap font-display text-[clamp(18px,1.7vw,24px)] font-bold tracking-[-.025em]" key={`${item}-${index}`} aria-hidden={index >= items.length}>{item}<i className="mx-[30px] not-italic text-[18px] text-[#789700] max-[640px]:mx-5">•</i></span>)}</div></div></div>;
}
