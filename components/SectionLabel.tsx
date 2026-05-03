"use client";

import { ReactNode } from "react";

export default function SectionLabel({
  num,
  title,
  dark = false,
}: {
  num: string;
  title: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-3 mb-9" data-section-label>
      <span
        data-section-num
        className={`text-[12px] tracking-[0.5px] ${
          dark ? "text-white/40" : "text-muted"
        }`}
      >
        {num}
      </span>
      <h2
        data-section-title
        className={`font-display font-semibold text-[34px] leading-[1.1] tracking-normal ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
