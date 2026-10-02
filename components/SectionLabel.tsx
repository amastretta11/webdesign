"use client";

import { ReactNode } from "react";

export default function SectionLabel({
  title,
  dark = false,
}: {
  title: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mb-9" data-section-label>
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
