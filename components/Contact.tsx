"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-contact-label] *", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        stagger: 0.07,
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
      gsap.from("[data-contact-body]", {
        y: 16,
        opacity: 0,
        duration: 0.9,
        delay: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.from("[data-contact-link]", {
        y: 12,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        delay: 0.25,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-12 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div data-contact-label>
          <SectionLabel title="Please say hi!" />
        </div>
        <div
          data-contact-body
          className="text-[17px] font-light leading-[1.45] text-ink tracking-tight2 max-w-[640px] mb-10 space-y-4"
        >
          <p>
            I love hearing from people, so please reach out! Right now I&apos;m mostly thinking about frontier AI security and cyber.
          </p>
          <p>
            Currently based in Menlo Park, but spend most of my time in San Francisco. Always down to make you matcha.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            data-contact-link
            href="mailto:amastretta@hotmail.com"
            className="inline-flex items-center gap-1.5 text-[15px] text-brand tracking-tight2 hover:opacity-70 hover:underline transition-opacity"
          >
            Email →
          </a>
          <a
            data-contact-link
            href="https://www.linkedin.com/in/andrea-mastretta/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[15px] text-brand tracking-tight2 hover:opacity-70 hover:underline transition-opacity"
          >
            LinkedIn →
          </a>
          <a
            data-contact-link
            href="https://x.com/amastretta1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[15px] text-brand tracking-tight2 hover:opacity-70 hover:underline transition-opacity"
          >
            X →
          </a>
        </div>
      </div>
    </section>
  );
}
