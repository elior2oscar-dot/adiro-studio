import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <nav className="nav" aria-label="ניווט ראשי">
      <div className="container nav-inner">
        <a className="logo" href="#top" aria-label={`${site.brand} — דף הבית`}>
          <Logo />
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#services">
            מה אנחנו עושים
          </a>
          <a className="nav-link" href="#process">
            איך זה עובד
          </a>
          <a className="nav-link" href="#about">
            מי אנחנו
          </a>
          <a
            className="nav-cta"
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            הזמינו אתר
          </a>
        </div>
      </div>
    </nav>
  );
}
