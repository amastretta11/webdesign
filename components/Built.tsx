"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "./SectionLabel";
import { PROJECTS, Project } from "@/lib/data";

export default function Built() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-built-label] *", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        stagger: 0.07,
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
      gsap.utils.toArray<HTMLElement>("[data-project-card]").forEach((el) => {
        gsap.from(el, {
          y: 28,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="built" ref={ref} className="py-12 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div data-built-label>
          <SectionLabel num="01" title={<>Some things I&apos;ve built</>} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      data-project-card
      className="group relative flex flex-col rounded-[18px] border border-hairline bg-white p-7 transition-all duration-300 hover:border-[#c0c0c0] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.18)]"
    >
      <p className="text-[11px] tracking-[0.3px] text-muted mb-3.5">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className="font-display text-[21px] font-semibold leading-[1.2] mb-2.5 text-ink">
        {project.title}
      </p>
      <p className="text-[14px] text-muted tracking-tight2 leading-[1.5]">{project.sub}</p>
      <p className="text-[15px] leading-[1.55] text-[#333] tracking-tight2 mt-4 flex-1">
        {project.desc}
      </p>

      {project.note && (
        <p className="text-[12px] text-muted tracking-[0.1px] mt-3.5 italic">
          ↳{" "}
          {project.noteLink ? (
            <a
              href={project.noteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              {project.note}
            </a>
          ) : (
            project.note
          )}
        </p>
      )}

      {project.press && (
        <p className="text-[12px] text-muted tracking-[0.2px] mt-3.5 flex items-center gap-1.5">
          <span className="text-[11px] opacity-50">◈</span>
          As covered in{" "}
          <a
            href="/el-sol-de-puebla.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand italic hover:underline"
          >
            {project.press}
          </a>
        </p>
      )}

      <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
        <div className="flex flex-wrap gap-2">
          {project.chips.map((c) => (
            <span
              key={c}
              className="text-[12px] px-3 py-1 rounded-full border border-hairline text-ink tracking-[-0.1px]"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-brand hover:underline"
            >
              Visit →
            </a>
          )}
        </div>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </article>
  );
}
