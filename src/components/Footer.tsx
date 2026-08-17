import Link from "next/link";
import { site } from "../../content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {site.shortName}
        </p>
        <p className="site-footer__links">
          <a href={site.instagram} rel="noopener noreferrer" target="_blank">
            Instagram
          </a>
          <span aria-hidden="true"> / </span>
          <Link href="/booking">Contact</Link>
        </p>
      </div>
    </footer>
  );
}
