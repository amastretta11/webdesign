"use client";

export default function Footer() {
  return (
    <footer
      className="py-10 px-8 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center"
      style={{ background: "#000", color: "rgba(255,255,255,0.4)" }}
    >
      <span className="text-[13px] tracking-[-0.1px]">© 2026 Andrea Mastretta</span>
      <div className="flex items-center gap-5 text-[13px] tracking-[-0.1px]">
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
      </div>
    </footer>
  );
}
