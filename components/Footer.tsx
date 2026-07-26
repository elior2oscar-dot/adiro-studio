import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="logo" href="#top" aria-label="חזרה לראש הדף">
          <Logo />
        </a>
        <div className="footer-meta">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.phoneDisplay}
          </a>
          <span>{site.founders}</span>
          <span>© {new Date().getFullYear()} {site.brand}</span>
        </div>
      </div>
    </footer>
  );
}
