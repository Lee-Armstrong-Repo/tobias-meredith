import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "../../content/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Tattoo Artist` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero__media">
        <Image
          src="/images/hero-placeholder.svg"
          alt="Atmospheric studio placeholder for Tobias Meredith"
          fill
          priority
          sizes="(max-width: 859px) 100vw, 50vw"
          unoptimized
        />
      </div>
      <div className="hero__copy">
        <h1 className="brand-mark">{site.name}</h1>
        <p className="lede">
          Custom tattoos with a clear process — from first idea to finished piece.
        </p>
        <div className="cta-row">
          <Link href="/booking" className="button">
            Book a consultation
          </Link>
          <Link href="/work" className="button-secondary">
            View work
          </Link>
        </div>
      </div>
    </section>
  );
}
