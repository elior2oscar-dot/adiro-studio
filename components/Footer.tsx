import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a
          className="footer-brand"
          href="#top"
          aria-label={`${site.brand} — דף הבית`}
        >
          <Logo showStudio idSuffix="footer" />
        </a>

        <p className="footer-copy">
          © {new Date().getFullYear()} {site.brand}. נבנה בדיוק.
        </p>

        <div className="footer-contact">
          <a
            className="footer-whatsapp"
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="footer-phone"
            href={`tel:${site.phoneTel}`}
            aria-label={`חיוג אל ${site.phoneDisplay}`}
          >
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
