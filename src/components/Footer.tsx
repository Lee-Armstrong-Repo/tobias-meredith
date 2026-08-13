import Link from "next/link";
import { footerInfo, footerStyles, site } from "../../content/site";

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand-block">
            <h2 className="site-footer__brand">{site.shortName}</h2>
            <p className="site-footer__blurb">
              Melbourne tattoo artist creating custom fine line, blackwork, and
              illustrative work through a slower, considered process.
            </p>
            <address className="site-footer__address">
              {site.location}
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
          </div>

          <div>
            <h3 className="site-footer__heading">Styles</h3>
            <ul className="site-footer__list">
              {footerStyles.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="site-footer__heading">Information</h3>
            <ul className="site-footer__list">
              {footerInfo.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="site-footer__heading">Opening hours</h3>
            <ul className="site-footer__hours">
              {site.openingHours.map((row) => (
                <li key={row.days}>
                  <span>{row.days}:</span>
                  <span>{row.hours}</span>
                </li>
              ))}
            </ul>
            <h3 className="site-footer__heading site-footer__heading--spaced">
              Connect
            </h3>
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
          </div>
        </div>

        <p className="site-footer__note">
          © {new Date().getFullYear()} {site.name}. Custom tattoos in Melbourne,
          Australia.
        </p>
      </div>
    </footer>
  );
}
