import Link from "next/link";
import { site } from "../../content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">{site.name}</p>
        <div className="site-footer__links">
          <a href={site.instagram} rel="noopener noreferrer" target="_blank">
            Instagram
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Link href="/booking">Book a consultation</Link>
        </div>
        <p className="site-footer__note">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
