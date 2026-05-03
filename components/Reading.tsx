"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "./SectionLabel";
import { READING } from "@/lib/data";

export default function Reading() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-reading-label] *", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        stagger: 0.07,
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
      gsap.utils.toArray<HTMLElement>("[data-reading-item]").forEach((el, i) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.06,
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="reading"
      ref={ref}
      className="py-12 px-8 text-white"
      style={{ background: "var(--dark1)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div data-reading-label>
          <SectionLabel num="03" title="What I'm reading" dark />
        </div>
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
        >
          {READING.map((item) => (
            <a
              key={item.title}
              data-reading-item
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04] transition-colors duration-300"
            >
              <p className="font-display text-[17px] font-semibold leading-[1.3] text-white group-hover:underline underline-offset-4">
                {item.title}
              </p>
              <p className="text-[13px] text-white/45 tracking-[-0.1px] mt-1">
                {item.author}
              </p>
              <span className="self-start mt-auto text-[11px] py-[3px] px-2.5 rounded-full border border-white/15 text-white/50 whitespace-nowrap tracking-[0.2px]">
                {item.tag}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
