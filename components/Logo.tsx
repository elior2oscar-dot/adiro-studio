import { site } from "@/lib/site";

type LogoProps = {
  variant?: "light" | "dark";
  showStudio?: boolean;
  bold?: boolean;
  idSuffix?: string;
};

export function Logo({
  variant = "light",
  showStudio = true,
  bold = false,
  idSuffix = "main",
}: LogoProps) {
  const gradId = `logoMarkGrad-${idSuffix}`;

  return (
    <span
      className={`brand-logo${bold ? " brand-logo-bold" : ""}`}
      aria-label={site.brand}
      data-variant={variant}
    >
      <svg
        className="brand-logo-mark"
        viewBox="0 0 40 40"
        width={bold ? 38 : 32}
        height={bold ? 38 : 32}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#c7d7ff" />
            <stop offset="100%" stopColor="#6ea8ff" />
          </linearGradient>
        </defs>
        <path
          d="M20 4 L34 34 H27.4 L24.1 26.2 H15.9 L12.6 34 H6 Z M17.7 21.8 H22.3 L20 16.2 Z"
          fill={variant === "light" ? `url(#${gradId})` : "#07080c"}
        />
      </svg>
      <span className="brand-logo-text">
        <span className="brand-logo-name">ADIRO</span>
        {showStudio ? <span className="brand-logo-studio">STUDIO</span> : null}
      </span>
    </span>
  );
}
