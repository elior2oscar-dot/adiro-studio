import { site } from "@/lib/site";

type LogoProps = {
  variant?: "light" | "dark";
  showStudio?: boolean;
};

export function Logo({ variant = "light", showStudio = true }: LogoProps) {
  const markColor = variant === "light" ? "#c9a45c" : "#0d1b2a";
  const textColor = variant === "light" ? "#f5f7fa" : "#0d1b2a";
  const studioColor = variant === "light" ? "rgba(234, 211, 159, 0.72)" : "#5b677a";

  return (
    <span className="brand-logo" aria-label={site.brand}>
      <svg
        className="brand-logo-mark"
        viewBox="0 0 40 40"
        width="34"
        height="34"
        aria-hidden="true"
      >
        <path
          d="M20 4 L34 34 H27.4 L24.1 26.2 H15.9 L12.6 34 H6 Z M17.7 21.8 H22.3 L20 16.2 Z"
          fill={markColor}
        />
      </svg>
      <span className="brand-logo-text">
        <span className="brand-logo-name" style={{ color: textColor }}>
          ADIRO
        </span>
        {showStudio ? (
          <span className="brand-logo-studio" style={{ color: studioColor }}>
            STUDIO
          </span>
        ) : null}
      </span>
    </span>
  );
}
