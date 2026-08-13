import Link from "next/link";
import { footerInfo, site } from "../../content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid site-footer__grid--compact">
          <section
            className="site-footer__brand-block"
            aria-labelledby="footer-brand-heading"
          >
            <p id="footer-brand-heading" className="site-footer__brand">
              {site.shortName}
            </p>
            <p className="site-footer__blurb">
              Custom fine line, blackwork, and illustrative tattoos through a
              slower, considered process.
            </p>
            <address className="site-footer__address">
              <span>{site.location}</span>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
          </section>

          <nav aria-labelledby="footer-info-heading">
            <p id="footer-info-heading" className="site-footer__heading">
              Information
            </p>
            <ul className="site-footer__list">
              {footerInfo.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-hours-heading">
            <p id="footer-hours-heading" className="site-footer__heading">
              Opening hours
            </p>
            <ul className="site-footer__hours">
              {site.openingHours.map((row) => (
                <li key={row.days}>
                  <span>{row.days}</span>
                  <span>{row.hours}</span>
                </li>
              ))}
            </ul>
            <nav
              aria-labelledby="footer-connect-heading"
              className="site-footer__connect"
            >
              <p
                id="footer-connect-heading"
                className="site-footer__heading site-footer__heading--spaced"
              >
                Connect
              </p>
              <ul className="site-footer__list site-footer__list--inline">
                <li>
                  <a
                    href={site.instagram}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>

        <p className="site-footer__note">
          <small>
            © {new Date().getFullYear()} {site.name}. {site.location}.
          </small>
        </p>
      </div>
    </footer>
  );
}
