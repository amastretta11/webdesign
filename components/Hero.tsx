"use client";

import { useEffect, useRef } from "react";
import { gsap, splitChars } from "@/lib/gsap";

const NAME = "Andrea Mastretta";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from("[data-name] [data-char]", {
        yPercent: 110,
        opacity: 0,
        duration: 0.9,
        stagger: 0.022,
        ease: "power4.out",
      })
        .from(
          "[data-tag]",
          { y: 16, opacity: 0, duration: 0.85, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          "[data-bio]",
          { y: 12, opacity: 0, duration: 0.7, ease: "power3.out" },
          "-=0.6"
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative pt-[90px] pb-6 px-8">
      <div className="max-w-[1200px] mx-auto">
        <h1
          data-name
          className="font-display font-semibold leading-[1.02] tracking-[-0.01em] text-ink mb-4"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          <span className="inline-block overflow-hidden align-baseline">
            {splitChars(NAME).map(({ c, i }) => (
              <span key={i} className="inline-block overflow-hidden align-baseline">
                <span data-char className="inline-block">{c}</span>
              </span>
            ))}
          </span>
        </h1>
        <div className="max-w-[860px]">
          <p
            data-tag
            className="font-display italic text-ink leading-[1.5] tracking-normal text-[17px]"
          >
            Currently building in frontier AI security at{" "}
            <a
              href="https://generalanalysis.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-ink/20 underline-offset-[6px] hover:decoration-ink transition-colors whitespace-nowrap"
            >
              General Analysis
            </a>
            .
          </p>
          <p
            data-bio
            className="mt-4 text-[17px] leading-[1.5] text-[#444] tracking-tight4"
          >
            Previously at Centerview and McKinsey{" "}
            <span className="text-muted mx-1">·</span> Matcha enthusiast
          </p>
        </div>
      </div>
    </section>
  );
}

export function HeroDivider() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-divider]", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power3.inOut",
        delay: 0.6,
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={ref} className="px-8">
      <div className="max-w-[1200px] mx-auto">
        <div data-divider className="h-px w-full bg-hairline" />
      </div>
    </div>
  );
}
