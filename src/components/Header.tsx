"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "../../content/site";

function getHashId(href: string) {
  const hashIndex = href.indexOf("#");
  return hashIndex >= 0 ? href.slice(hashIndex + 1) : null;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function scrollToId(id: string) {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function onNavClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    setOpen(false);

    const id = getHashId(href);
    if (!id) {
      return;
    }

    const isHomeHash = href.startsWith("/#") || href.startsWith("#");
    if (!isHomeHash) {
      return;
    }

    if (pathname === "/") {
      event.preventDefault();
      window.history.pushState(null, "", `/#${id}`);
      scrollToId(id);
      return;
    }

    event.preventDefault();
    router.push(`/#${id}`);
  }

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const id = window.location.hash.replace(/^#/, "");
    if (!id) {
      return;
    }

    // After navigating to home with a hash, settle at the section
    // without animating from the previous page's scroll position.
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: "auto", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

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
                  onClick={(event) => onNavClick(event, item.href)}
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
