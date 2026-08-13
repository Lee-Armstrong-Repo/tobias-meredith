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
    <header
      className={open ? "site-header is-menu-open" : "site-header"}
      role="banner"
    >
      <div className="site-header__inner">
        <Link
          href="/"
          className="site-logo"
          aria-label={`${site.name} — Melbourne tattoo artist home`}
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className={open ? "nav-toggle__bars is-open" : "nav-toggle__bars"}>
            <span />
            <span />
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={open ? "site-nav is-open" : "site-nav"}
          aria-label="Primary Melbourne tattoo studio navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="site-nav__link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
