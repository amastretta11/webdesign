"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const links = [
  { label: "Built", id: "built" },
  { label: "Experience", id: "experience" },
  { label: "Reading", id: "reading" },
];

export default function Nav() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-nav-item]", {
        y: -8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        delay: 0.2,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 h-[52px] flex items-center px-8"
      style={{
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <button
        data-nav-item
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-display text-white text-[16px] font-semibold tracking-tight3 mr-auto bg-transparent border-0 cursor-pointer"
      >
        AM
      </button>
      <div className="hidden sm:flex items-center gap-7">
        {links.map((l) => (
          <button
            key={l.id}
            data-nav-item
            onClick={() => scrollTo(l.id)}
            className="text-[13px] tracking-[-0.1px] text-white/65 hover:text-white transition-colors duration-150 bg-transparent border-0 cursor-pointer"
          >
            {l.label}
          </button>
        ))}
        <button
          data-nav-item
          onClick={() => scrollTo("contact")}
          className="text-[13px] text-white bg-brand hover:bg-brand/85 transition-colors duration-150 rounded-full px-4 py-[7px] border-0 cursor-pointer"
        >
          Say hi
        </button>
      </div>
    </nav>
  );
}
