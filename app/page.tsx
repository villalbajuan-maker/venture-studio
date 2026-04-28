import { BrandTicketArtifact } from "@/components/brand-ticket-artifact";
import { LenisProvider } from "@/components/lenis-provider";
import { NarrativeSection } from "@/components/narrative-section";

const sections = [
  {
    sectionIndex: "01",
    tone: "black" as const,
    chapter: "Disbelief",
    mode: "mask" as const,
    headlineLines: ["WE DON'T BELIEVE", "IN IDEAS."],
    videoSrc: "/videos/loop-grid.mp4",
    maskVariant: "hero" as const,
    panelClassName: "md:translate-y-1",
    supportingLines: ["We believe in what survives execution."],
    priority: true,
  },
  {
    sectionIndex: "02",
    tone: "white" as const,
    chapter: "Failure Model",
    mode: "editorial" as const,
    headlineLines: [
      "MOST VENTURES FAIL IN THE SPACE",
      "BETWEEN INTENTION AND STRUCTURE.",
    ],
    headlineClassName:
      "max-w-[13ch] text-[11.5vw] leading-[0.9] md:max-w-[11ch] md:text-[6.9vw] xl:text-[5.5vw]",
    panelClassName: "md:max-w-[34rem]",
    gridClassName: "md:-mt-20",
    supportingLines: [
      "Not at the beginning.",
      "In the gap no one designs correctly.",
    ],
  },
  {
    sectionIndex: "03",
    tone: "black" as const,
    chapter: "System Drift",
    mode: "mask" as const,
    headlineLines: ["DECISIONS ACCUMULATE.", "DISCIPLINE DOESN'T."],
    videoSrc: "/videos/loop-grid.mp4",
    supportingLines: [
      "Speed replaces direction.",
      "Effort disguises the absence of design.",
    ],
  },
  {
    sectionIndex: "04",
    tone: "red" as const,
    chapter: "Rejection",
    mode: "editorial" as const,
    headlineLines: ["WE REJECT THE", "CULTURE OF ASSEMBLY."],
    headlineClassName:
      "max-w-[10ch] text-[13vw] leading-[0.84] md:max-w-[9ch] md:text-[7.6vw] xl:text-[6vw]",
    panelClassName: "md:max-w-[34rem]",
    supportingLines: [
      "Slides assembled.",
      "Teams assembled.",
      "Products assembled.",
      "Nothing holds.",
    ],
  },
  {
    sectionIndex: "05",
    tone: "black" as const,
    chapter: "Construction",
    mode: "mask" as const,
    headlineLines: ["VENTURES ARE NOT LAUNCHED.", "THEY ARE CONSTRUCTED."],
    videoSrc: "/videos/loop-lines.mp4",
    maskVariant: "statement" as const,
    fullBleed: true,
    supportingLines: ["Deliberately.", "Systemically.", "Under constraint."],
  },
  {
    sectionIndex: "06",
    tone: "white" as const,
    chapter: "Execution Model",
    mode: "editorial" as const,
    headlineLines: ["EXECUTION IS NOT MOVEMENT."],
    headlineClassName:
      "max-w-[9ch] text-[13.5vw] leading-[0.84] md:max-w-[8ch] md:text-[7.9vw] xl:text-[6.2vw]",
    panelClassName: "md:max-w-[32rem]",
    gridClassName: "md:-mt-16",
    supportingLines: [
      "Execution is architecture.",
    ],
  },
  {
    sectionIndex: "07",
    tone: "red" as const,
    chapter: "Breakdown",
    mode: "mask" as const,
    headlineLines: ["WITHOUT STRUCTURE,", "EVERYTHING FRAGMENTS."],
    videoSrc: "/videos/loop-pulse.mp4",
    maskVariant: "statement" as const,
    fullBleed: true,
    supportingLines: [
      "Strategy fragments.",
      "Product drifts.",
      "Capital dissolves.",
      "Time disappears.",
    ],
  },
  {
    sectionIndex: "08",
    tone: "black" as const,
    chapter: "Collapse",
    mode: "editorial" as const,
    headlineLines: ["FAILURE DOESN'T", "ARRIVE LOUDLY."],
    headlineClassName:
      "max-w-[9ch] text-[12.8vw] leading-[0.84] md:max-w-[8ch] md:text-[7.4vw] xl:text-[5.8vw]",
    panelClassName: "md:max-w-[28rem]",
    supportingClassName: "md:text-[2rem]",
    gridClassName: "md:-mt-28 md:grid-cols-[minmax(0,1fr)_minmax(280px,420px)]",
    supportingLines: [
      "It settles quietly.",
    ],
  },
  {
    sectionIndex: "09",
    tone: "white" as const,
    chapter: "Clarity Domain",
    mode: "editorial" as const,
    headlineLines: ["WE OPERATE WHERE", "AMBIGUITY ENDS."],
    headlineClassName:
      "max-w-[9ch] text-[12.6vw] leading-[0.84] md:max-w-[8ch] md:text-[7.2vw] xl:text-[5.7vw]",
    panelClassName: "md:max-w-[34rem]",
    gridClassName: "md:-mt-20",
    supportingLines: [
      "Where decisions are not reactive.",
      "Where systems are not improvised.",
      "Where progress is not accidental.",
    ],
  },
  {
    sectionIndex: "10",
    tone: "black" as const,
    chapter: "Operating Method",
    mode: "mask" as const,
    headlineLines: ["WE DON'T ADVISE.", "WE DON'T DECORATE.", "WE CONSTRUCT."],
    videoSrc: "/videos/loop-collapse.mp4",
    artifactClassName: "md:translate-y-2 md:rotate-[1deg]",
    maskVariant: "ceremonial" as const,
    panelClassName: "md:max-w-[38rem] md:p-8",
    supportingClassName: "md:text-[2.05rem]",
    supportingLines: [
      "Every venture we touch is treated as a system:",
      "interconnected, pressure-tested, built to sustain scale.",
    ],
    artifactVariant: "black" as const,
    artifactCaption: "Institutional Artifact",
  },
];

export default function HomePage() {
  return (
    <>
      <LenisProvider />

      <main className="relative">
        {sections.map((section) => (
          <NarrativeSection key={section.sectionIndex} {...section} />
        ))}

        <section className="section-shell flex items-center bg-bone text-carbon">
          <div className="section-vignette opacity-40" />
          <div className="section-grid opacity-20" />
          <div className="section-rail section-rail-top bg-carbon/12" />
          <div className="section-rail section-rail-bottom bg-carbon/12" />

          <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col justify-between gap-10 px-5 py-8 md:px-10 md:py-10">
            <div className="text-[10px] font-medium uppercase tracking-[0.5em] text-carbon/50 md:text-xs">
              11
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <div className="mx-auto w-full max-w-[1520px]">
                <h1 className="max-w-[11ch] font-display text-[13.6vw] font-black uppercase leading-[0.84] tracking-[-0.075em] text-carbon md:max-w-[8ch] md:text-[7.8vw] xl:text-[6.1vw]">
                  <span className="block">THIS IS NOT</span>
                  <span className="block">FOR EVERYONE.</span>
                </h1>
              </div>
            </div>

            <div className="grid gap-6 pb-4 md:-mt-24 md:grid-cols-[minmax(280px,420px)_minmax(320px,620px)] md:items-end md:gap-12">
              <div className="max-w-[22rem]">
                <p className="text-[11px] uppercase tracking-[0.35em] text-carbon/50 md:text-xs">
                  Admission
                </p>
                <BrandTicketArtifact
                  artifactClassName="md:translate-y-2 md:rotate-[2deg]"
                  compact
                  caption="Admission Artifact"
                  tone="light"
                  variant="red"
                  className="mt-6 md:max-w-[26rem]"
                />
              </div>

              <div className="copy-panel copy-panel-light ml-auto w-full max-w-[38rem] p-5 md:p-8">
                <div className="mb-5 h-px w-16 bg-carbon/20 md:ml-auto" />

                <div className="flex flex-col items-start gap-6 text-left md:items-end md:text-right">
                  <p className="max-w-[30rem] text-balance text-[1.65rem] font-medium leading-[0.98] tracking-[-0.045em] md:text-[2.2rem]">
                    Not for exploration.
                  </p>
                  <p className="max-w-[30rem] text-balance text-[1.65rem] font-medium leading-[0.98] tracking-[-0.045em] md:text-[2.2rem]">
                    Not for validation.
                  </p>
                  <p className="max-w-[30rem] text-balance text-[1.65rem] font-medium leading-[0.98] tracking-[-0.045em] md:text-[2.2rem]">
                    Not for "let's see what happens."
                  </p>
                  <p className="max-w-[24rem] text-balance text-[11px] uppercase tracking-[0.42em] text-carbon/50 md:text-sm">
                    If you need momentum, look elsewhere.
                  </p>
                  <p className="max-w-[30rem] text-balance text-[1.72rem] font-medium leading-[0.96] tracking-[-0.05em] md:text-[2.5rem]">
                    If you need structure, apply.
                  </p>
                  <a
                    href="mailto:apply@redrideticket.studio?subject=Request%20a%20Red%20Ride%20Ticket"
                    className="cta-outline inline-flex min-h-14 items-center justify-center border border-carbon px-8 text-sm font-semibold uppercase tracking-[0.38em] transition hover:bg-carbon hover:text-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-carbon md:px-10"
                  >
                    Request a Red Ride Ticket
                  </a>
                  <p className="max-w-[24rem] text-balance text-[11px] uppercase tracking-[0.42em] text-carbon/50 md:text-sm">
                    Execution begins under constraint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-black border-t border-white/10">
        <div className="mx-auto max-w-[1800px] px-6 py-16 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
            <div className="text-white/70 uppercase tracking-[0.3em] text-xs">
              <div>RED RIDE TICKET</div>
              <div className="mt-2 normal-case tracking-normal text-[11px]">
                Venture Execution Studio
              </div>
            </div>
            <div className="text-white/90 text-sm md:text-base tracking-tight">
              What is not structured, does not hold.
            </div>
            <div className="text-white/70 text-sm">
              apply@redrideticket.studio
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
