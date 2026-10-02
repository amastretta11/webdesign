"use client";

export default function Footer() {
  return (
    <footer
      className="py-6 px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left"
      style={{ background: "#000" }}
    >
      <span className="text-[11px] text-white/40 tracking-[-0.1px] md:flex-shrink-0">
        © 2026 Andrea Mastretta
      </span>
      <p className="text-[11px] text-white/55 italic tracking-[-0.1px] leading-[1.6] md:flex-1 md:text-center md:px-6">
        Menlo Park, CA · Pacific Time ·{" "}
        <svg
          aria-hidden="true"
          width="13"
          height="13"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline-block align-[-0.15em] mr-[3px]"
        >
          <ellipse cx="8" cy="6.5" rx="5.5" ry="1" />
          <path d="M2.5,6.5 Q3.2,12.5 8,13 Q12.8,12.5 13.5,6.5" />
        </svg>
        Matcha Order: 5g matcha (Favorite:{" "}
        <a
          href="https://ippodotea.com/products/ummon-no-mukashi-40g"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-white/25 underline-offset-2 hover:text-white hover:decoration-white/60 transition-colors"
        >
          Ummon by Ippodo
        </a>
        ), oat milk, light sweetener
      </p>
      <div className="flex items-center justify-center md:justify-end gap-3 text-[11px] text-white/55 tracking-[-0.1px] md:flex-shrink-0">
        <a
          href="mailto:amastretta@hotmail.com"
          className="hover:text-white transition-colors"
        >
          Email
        </a>
        <span className="text-white/20">·</span>
        <a
          href="https://www.linkedin.com/in/andrea-mastretta/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <span className="text-white/20">·</span>
        <a
          href="https://x.com/amastretta1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          X
        </a>
      </div>
    </footer>
  );
}
