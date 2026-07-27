import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <nav className="nav" aria-label="ניווט ראשי">
      <div className="container nav-inner">
        <a className="logo" href="#top" aria-label={`${site.brand} — דף הבית`}>
          <Logo bold idSuffix="nav" />
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#works">
            פרויקטים
          </a>
          <a className="nav-link" href="#capabilities">
            יכולות
          </a>
          <a className="nav-link" href="#services">
            שירותים
          </a>
          <a className="nav-link" href="#process">
            תהליך
          </a>
          <a className="nav-link" href="#about">
            הסטודיו
          </a>
          <a
            className="nav-cta"
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            התחלת פרויקט
          </a>
        </div>
      </div>
    </nav>
  );
}
