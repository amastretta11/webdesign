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
      gsap.from("[data-contact-meta]", {
        y: 10,
        opacity: 0,
        duration: 0.7,
        delay: 0.4,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-12 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div data-contact-label>
          <SectionLabel num="04" title="Say hi" />
        </div>
        <p
          data-contact-body
          className="text-[17px] font-light leading-[1.45] text-ink tracking-tight2 max-w-[640px] mb-10"
        >
          I like talking to people building things they really care about.
          <br />
          I&apos;m especially interested in how AI shows up in the physical world.
          <br />
          If you&apos;re in Menlo Park, I&apos;ll make you matcha.
        </p>
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
        </div>
        <p
          data-contact-meta
          className="mt-16 text-[13px] text-muted italic tracking-[-0.1px]"
        >
          Menlo Park, CA · PST timezone · coffee order: 5g matcha, oat milk, light sweetener
        </p>
      </div>
    </section>
  );
}
