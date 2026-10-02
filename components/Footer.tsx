"use client";

export default function Footer() {
  return (
    <footer
      className="py-8 px-8 flex flex-col gap-3"
      style={{ background: "#000" }}
    >
      <p className="text-[12px] text-white/55 italic tracking-[-0.1px] leading-[1.7] max-w-[760px] mx-auto text-center">
        Menlo Park, CA · Pacific Time ·{" "}
        <svg
          aria-hidden="true"
          width="14"
          height="14"
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
      <p className="text-[11px] text-white/35 tracking-[-0.1px]">
        © 2026 Andrea Mastretta
      </p>
    </footer>
  );
}
