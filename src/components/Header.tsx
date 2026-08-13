"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "../../content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={open ? "site-header is-menu-open" : "site-header"}>
      <div className="site-header__inner">
        <p className="site-logo-wrap">
          <Link
            href="/"
            className="site-logo"
            aria-label={`${site.name} home`}
            onClick={() => setOpen(false)}
          >
            <span aria-hidden="true">{site.name.split(" ")[0]}</span>
            <span className="sr-only">{site.name}</span>
          </Link>
        </p>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            className={open ? "nav-toggle__bars is-open" : "nav-toggle__bars"}
            aria-hidden="true"
          >
            <span />
            <span />
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={open ? "site-nav is-open" : "site-nav"}
          aria-label="Primary"
        >
          <ul className="site-nav__list">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="site-nav__link"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
