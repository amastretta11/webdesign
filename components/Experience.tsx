"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "./SectionLabel";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-exp-label] *", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        stagger: 0.07,
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
      gsap.from("[data-exp-item]", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.from("[data-exp-rule]", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={ref} className="bg-parchment py-12 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div data-exp-label>
          <SectionLabel num="02" title="Experience" />
        </div>
        <div className="max-w-[860px]">
          {EXPERIENCE.map((item, i) => (
            <div
              key={item.company}
              data-exp-item
              className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 items-start py-7 ${
                i === 0 ? "pt-0" : ""
              } ${i !== EXPERIENCE.length - 1 ? "border-b border-hairline" : ""}`}
            >
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-semibold text-ink tracking-[-0.1px]">
                  {item.company}
                </span>
                {item.location && (
                  <span className="text-[12px] text-muted tracking-[-0.1px]">
                    {item.location}
                  </span>
                )}
                <span className="text-[12px] text-muted tracking-[-0.1px]">{item.period}</span>
              </div>
              <div>
                <p className="font-display text-[19px] font-semibold leading-[1.2] mb-2 text-ink">
                  {item.role}
                </p>
                {item.group && item.group.includes("·") ? (
                  <div className="mb-2.5">
                    {item.group.split("·").map((g, j) => (
                      <p
                        key={j}
                        className="text-[13px] text-muted tracking-[-0.1px] leading-[1.6]"
                      >
                        {g.trim()}
                      </p>
                    ))}
                  </div>
                ) : item.group ? (
                  <p className="text-[13px] text-muted tracking-[-0.1px] mb-2.5">
                    {item.group}
                  </p>
                ) : null}
                {item.bullets.map((b, j) => (
                  <p
                    key={j}
                    className="text-[14px] text-[#555] leading-[1.5] tracking-[-0.15px] mt-1.5"
                  >
                    <span className="text-muted">→ </span>
                    {b}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
