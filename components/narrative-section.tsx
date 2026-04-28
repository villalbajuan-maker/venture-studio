"use client";

import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { BrandTicketArtifact } from "@/components/brand-ticket-artifact";
import { MaskedVideoWord } from "@/components/masked-video-word";

gsap.registerPlugin(ScrollTrigger);

type SectionTone = "black" | "white" | "red";

type NarrativeSectionProps = {
  sectionIndex: string;
  tone: SectionTone;
  artifactClassName?: string;
  chapter: string;
  gridClassName?: string;
  headlineClassName?: string;
  headlineLines: string[];
  maskVariant?: "hero" | "statement" | "ceremonial";
  supportingLines: string[];
  mode: "mask" | "editorial";
  panelClassName?: string;
  supportingClassName?: string;
  videoSrc?: string;
  artifactCaption?: string;
  artifactVariant?: "black" | "red";
  priority?: boolean;
};

const toneClasses: Record<SectionTone, string> = {
  black: "bg-carbon text-bone",
  white: "bg-bone text-carbon",
  red: "bg-signal text-bone",
};

const accentClasses: Record<SectionTone, string> = {
  black: "text-bone/55",
  white: "text-carbon/50",
  red: "text-bone/60",
};

const panelClasses: Record<SectionTone, string> = {
  black: "copy-panel",
  white: "copy-panel copy-panel-light",
  red: "copy-panel copy-panel-red",
};

export function NarrativeSection({
  sectionIndex,
  tone,
  artifactClassName,
  chapter,
  gridClassName,
  headlineClassName,
  headlineLines,
  maskVariant = "statement",
  supportingLines,
  mode,
  panelClassName,
  supportingClassName,
  videoSrc,
  artifactCaption,
  artifactVariant,
  priority = false,
}: NarrativeSectionProps) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = rootRef.current;
      if (!section) {
        return;
      }

      const targets = section.querySelectorAll("[data-reveal]");

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: 48,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            end: "bottom 24%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const maskTone = tone === "white" ? "light" : tone === "red" ? "red" : "dark";
  const railClass = tone === "white" ? "bg-carbon/12" : "bg-bone/14";
  const displayClass =
    tone === "white" ? "text-carbon" : "text-bone";

  return (
    <section
      ref={rootRef}
      className={clsx("section-shell flex items-center", toneClasses[tone])}
    >
      <div className="section-grid" />
      <div className="section-vignette" />
      <div className="section-noise" />
      <div className={clsx("section-rail section-rail-top", railClass)} />
      <div className={clsx("section-rail section-rail-bottom", railClass)} />

      <div
        className={clsx(
          "relative z-10 mx-auto flex w-full max-w-[1800px] flex-col justify-between gap-10 px-5 py-8 md:px-10 md:py-10",
          mode === "editorial" && "gap-7 md:gap-8",
        )}
      >
        <div
          data-reveal
          className={clsx(
            "font-body text-[10px] font-medium uppercase tracking-[0.5em] md:text-xs",
            accentClasses[tone],
          )}
        >
          {sectionIndex}
        </div>

        <div className="flex flex-1 flex-col justify-center">
          {mode === "mask" && videoSrc ? (
            <MaskedVideoWord
              lines={headlineLines}
              videoSrc={videoSrc}
              tone={maskTone}
              variant={maskVariant}
              priority={priority}
            />
          ) : (
            <div data-reveal className="mx-auto w-full max-w-[1520px]">
              <h2
                className={clsx(
                  "max-w-[12ch] font-display text-[14vw] font-black uppercase leading-[0.86] tracking-[-0.07em] md:text-[8.2vw] xl:text-[6.6vw]",
                  displayClass,
                  headlineClassName,
                )}
              >
                {headlineLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>
          )}
        </div>

        <div
          className={clsx(
            "grid gap-6 pb-4 md:grid-cols-[minmax(0,1fr)_minmax(320px,620px)] md:items-end md:gap-10",
            mode === "editorial" && "md:-mt-12",
            gridClassName,
          )}
        >
          <div
            data-reveal
            className={clsx(
              "max-w-[15rem] text-[11px] uppercase tracking-[0.35em] md:text-xs",
              accentClasses[tone],
            )}
          >
            {chapter}
          </div>

          <div
            className={clsx(
              "ml-auto w-full max-w-[36rem] p-5 md:p-7",
              panelClasses[tone],
              panelClassName,
            )}
          >
            <div
              data-reveal
              className={clsx(
                "mb-5 h-px w-16 md:ml-auto",
                tone === "white" ? "bg-carbon/20" : "bg-bone/20",
              )}
            />

            <div className="space-y-4 text-left md:text-right">
              {supportingLines.map((line) => (
                <p
                  key={line}
                  data-reveal
                  className={clsx(
                    "max-w-[30rem] text-balance text-[1.65rem] font-medium leading-[0.98] tracking-[-0.045em] md:ml-auto md:text-[2.3rem]",
                    supportingClassName,
                  )}
                >
                  {line}
                </p>
              ))}
            </div>

            {artifactVariant ? (
              <div data-reveal className="pt-6">
                <BrandTicketArtifact
                  artifactClassName={artifactClassName}
                  compact
                  caption={artifactCaption}
                  tone={tone === "white" ? "light" : tone === "red" ? "red" : "dark"}
                  variant={artifactVariant}
                  className="md:ml-auto md:max-w-[25rem]"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
