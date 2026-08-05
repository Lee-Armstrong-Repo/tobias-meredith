import Image from "next/image";
import type { Metadata } from "next";
import { site } from "../../../content/site";
import { workItems } from "../../../content/work";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected tattoo work by ${site.name}. Browse fine line, blackwork, illustrative, and ornamental pieces.`,
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="page">
      <div className="page-intro">
        <h1>Work</h1>
        <p>
          A selection of recent pieces. Replace these placeholders by adding
          photos to <code>public/work</code> and listing them in{" "}
          <code>content/work.ts</code>.
        </p>
      </div>

      <div className="work-grid">
        {workItems.map((item) => (
          <article key={item.id} className="work-card">
            <div className="work-card__media">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 859px) 100vw, (max-width: 1099px) 50vw, 33vw"
                unoptimized={item.src.endsWith(".svg")}
              />
            </div>
            <div className="work-card__meta">
              <strong>{item.title}</strong>
              <span>{item.category}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
