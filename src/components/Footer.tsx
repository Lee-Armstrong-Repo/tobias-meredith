import Link from "next/link";
import { nav, site } from "../../content/site";

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        <div className="site-footer__brand-block">
          <p className="site-footer__brand">{site.name}</p>
          <p className="site-footer__location">
            Melbourne tattoo artist · Custom fine line, blackwork &amp;
            illustrative tattoos
          </p>
          <address className="site-footer__address">
            {site.location}
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/about">About</Link>
          <Link href="/booking">Book a consultation</Link>
        </nav>

        <div className="site-footer__links">
          <a href={site.instagram} rel="noopener noreferrer" target="_blank">
            Instagram
          </a>
        </div>

        <p className="site-footer__note">
          © {new Date().getFullYear()} {site.name}. Custom tattoos in Melbourne,
          Australia.
        </p>
      </div>
    </footer>
  );
}
