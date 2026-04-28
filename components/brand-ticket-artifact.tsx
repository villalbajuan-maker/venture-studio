import clsx from "clsx";
import Image from "next/image";

type BrandTicketArtifactProps = {
  artifactClassName?: string;
  className?: string;
  caption?: string;
  compact?: boolean;
  tone?: "dark" | "light" | "red";
  variant?: "black" | "red";
};

export function BrandTicketArtifact({
  artifactClassName,
  className,
  caption = "Brand Artifact",
  compact = false,
  tone = "dark",
  variant = "black",
}: BrandTicketArtifactProps) {
  const frameClass =
    tone === "light"
      ? "border-carbon/10 bg-carbon/[0.035]"
      : tone === "red"
        ? "border-bone/15 bg-bone/[0.05]"
        : "border-bone/10 bg-white/[0.03]";

  const labelClass =
    tone === "light" ? "text-carbon/45" : "text-bone/55";

  const ticketSrc =
    variant === "red" ? "/brand/ticket-red.png" : "/brand/ticket-black.png";

  const ticketAlt =
    variant === "red"
      ? "Red Ride Ticket red admission artifact"
      : "Red Ride Ticket black institutional artifact";

  return (
    <figure className={clsx("relative", className)}>
      <div className={clsx("relative overflow-hidden border p-3 md:p-4", frameClass)}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,59,48,0.12),transparent_30%),radial-gradient(circle_at_70%_75%,rgba(255,255,255,0.08),transparent_32%)]" />
        <div className={clsx("absolute left-3 top-3 h-px w-10", tone === "light" ? "bg-carbon/18" : "bg-bone/18")} />
        <div className={clsx("absolute bottom-3 right-3 h-px w-14", tone === "light" ? "bg-carbon/14" : "bg-bone/14")} />

        <div
          className={clsx(
            "relative transition-transform duration-700",
            compact ? "rotate-[-2deg]" : "rotate-[-3deg]",
            artifactClassName,
          )}
        >
          <Image
            src={ticketSrc}
            alt={ticketAlt}
            width={1512}
            height={982}
            priority={false}
            className={clsx(
              "h-auto w-full object-contain drop-shadow-[0_32px_48px_rgba(0,0,0,0.28)]",
              compact ? "max-w-[22rem]" : "max-w-[34rem]",
            )}
          />
        </div>
      </div>

      <figcaption
        className={clsx(
          "pt-3 text-[10px] uppercase tracking-[0.42em] md:text-[11px]",
          labelClass,
        )}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
