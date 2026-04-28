import clsx from "clsx";

type MaskedVideoWordProps = {
  lines: string[];
  videoSrc: string;
  tone: "dark" | "light" | "red";
  variant?: "hero" | "statement" | "ceremonial";
  priority?: boolean;
  className?: string;
};

function createMask(lines: string[], variant: "hero" | "statement" | "ceremonial") {
  const lineCount = lines.length;
  const longestLine = Math.max(...lines.map((line) => line.length));
  const compact = longestLine > 16;
  const extended = longestLine > 24;
  const fontSize =
    variant === "ceremonial"
      ? lineCount >= 3
        ? 156
        : extended
          ? 176
          : 226
      : variant === "statement"
        ? lineCount >= 3
          ? 160
          : extended
            ? 184
            : compact
              ? 234
              : 330
        : lineCount >= 3
          ? 170
          : extended
            ? 190
            : compact
              ? 250
              : 390;
  const letterSpacing =
    variant === "ceremonial"
      ? lineCount >= 3
        ? -8
        : extended
          ? -10
          : -16
      : lineCount >= 3
        ? -10
        : extended
          ? -12
          : compact
            ? -18
            : -34;
  const startY =
    variant === "hero"
      ? lineCount === 1
        ? 56
        : lineCount === 2
          ? 44
          : 35
      : lineCount === 1
        ? 56
        : lineCount === 2
          ? 43
          : 35;

  const tspans = lines
    .map((line, index) => {
      const y =
        startY +
        index *
          (variant === "ceremonial"
            ? lineCount >= 3
              ? 21
              : 24
            : lineCount >= 3
              ? 23
              : 27);
      return `<tspan x="50%" y="${y}%">${line}</tspan>`;
    })
    .join("");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
      <rect width="100%" height="100%" fill="black" />
      <text
        text-anchor="middle"
        fill="white"
        font-family="Arial Narrow, Roboto Condensed, Helvetica Neue, Arial, sans-serif"
        font-size="${fontSize}"
        font-weight="900"
        letter-spacing="${letterSpacing}"
      >${tspans}</text>
    </svg>
  `;

  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
}

export function MaskedVideoWord({
  lines,
  videoSrc,
  tone,
  variant = "statement",
  priority = false,
  className,
}: MaskedVideoWordProps) {
  const lineCount = lines.length;
  const longestLine = Math.max(...lines.map((line) => line.length));
  const compact = longestLine > 16;
  const extended = longestLine > 24;
  const veil =
    tone === "light"
      ? "rgba(243,241,235,0.1)"
      : tone === "red"
        ? "rgba(5,5,5,0.18)"
        : "rgba(5,5,5,0.24)";
  const stroke =
    tone === "light"
      ? "rgba(5,5,5,0.24)"
      : tone === "red"
        ? "rgba(243,241,235,0.28)"
        : "rgba(243,241,235,0.22)";

  return (
    <div
      className={clsx(
        "relative mx-auto flex h-[40vh] min-h-[240px] w-full max-w-[min(96vw,1600px)] items-center justify-center md:h-[60vh] xl:h-[72vh]",
        className,
      )}
      aria-label={lines.join(" ")}
    >
      <div
        className={clsx(
          "absolute top-1/2 h-px -translate-y-[8vh] bg-white/20",
          variant === "hero"
            ? "inset-x-[3%] md:inset-x-[6%]"
            : "inset-x-[8%] md:inset-x-[12%]",
        )}
      />
      <div
        className={clsx(
          "absolute top-1/2 h-px translate-y-[9vh] bg-white/10",
          variant === "hero"
            ? "inset-x-[12%] md:inset-x-[16%]"
            : "inset-x-[18%] md:inset-x-[22%]",
        )}
      />

      <div
        className="mask-video absolute inset-0"
        style={{
          WebkitMaskImage: createMask(lines, variant),
          maskImage: createMask(lines, variant),
        }}
      >
        <video
          className="h-full w-full object-cover [filter:contrast(1.35)_saturate(0.85)_brightness(1.05)]"
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${veil}, transparent 26%, transparent 74%, ${veil})`,
          }}
        />
      </div>

      <span
        className={clsx(
          "pointer-events-none absolute inset-0 mx-auto flex flex-col items-center justify-center font-display font-black uppercase text-transparent",
          variant === "hero"
            ? "w-[98%] md:w-[95%]"
            : variant === "ceremonial"
              ? "w-[92%] md:w-[86%]"
              : "w-[94%] md:w-[88%]",
          lineCount >= 3 && variant === "ceremonial"
            ? "gap-[0.08em] text-[7.8vw] tracking-[-0.032em] md:text-[5.3vw] xl:text-[4.4vw]"
            : lineCount >= 3
              ? "gap-[0.05em] text-[8.4vw] tracking-[-0.04em] md:text-[5.8vw] xl:text-[4.9vw]"
            : variant === "hero"
              ? "gap-[0.03em] text-[11.2vw] tracking-[-0.05em] md:text-[8vw] xl:text-[6.8vw]"
            : extended
              ? "gap-[0.06em] text-[9.7vw] tracking-[-0.042em] md:text-[6.9vw] xl:text-[5.7vw]"
              : compact
                ? "gap-[0.06em] text-[11vw] tracking-[-0.055em] md:text-[8vw] xl:text-[6.8vw]"
              : "gap-[0.05em] text-[25vw] tracking-tighterest md:text-[20.5vw] xl:text-[17.5vw]",
        )}
        style={{
          WebkitTextStroke:
            variant === "hero" ? `2px ${stroke}` : `1.8px ${stroke}`,
          textShadow:
            tone === "light"
              ? "0 0 24px rgba(5,5,5,0.06)"
              : "0 0 30px rgba(255,255,255,0.06)",
        }}
      >
        {lines.map((line) => (
          <span
            key={line}
            className={clsx(
              "block",
              variant === "hero" ? "leading-[0.84]" : "leading-[0.88]",
            )}
          >
            {line}
          </span>
        ))}
      </span>
    </div>
  );
}
