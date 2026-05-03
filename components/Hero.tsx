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

      // Subtle scroll cue fade-out
      gsap.to("[data-scroll-cue]", {
        opacity: 0,
        y: -6,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "+=160", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative max-w-[1200px] mx-auto pt-[90px] pb-6 px-8"
    >
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
      <div className="max-w-[520px]">
        <p
          data-tag
          className="font-display italic text-ink leading-[1.3] tracking-normal"
          style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
        >
          Figuring out what&apos;s next for me.
        </p>
        <p
          data-bio
          className="text-[17px] leading-[1.6] text-[#444] tracking-tight4 mt-3"
        >
          Currently @ Centerview.
        </p>
      </div>

      <div
        data-scroll-cue
        aria-hidden
        className="hidden md:flex absolute right-8 bottom-3 items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted"
      >
        Scroll
        <span className="block h-px w-8 bg-muted/60" />
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
    <div ref={ref} className="max-w-[1200px] mx-auto px-8">
      <div data-divider className="h-px w-full bg-hairline" />
    </div>
  );
}
