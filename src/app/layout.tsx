import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { site } from "../../content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Melbourne Tattoo Artist`,
    template: `%s | ${site.name} Melbourne`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  keywords: [...site.keywords],
  category: "Tattoo Artist",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Melbourne Tattoo Artist`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Melbourne Tattoo Artist`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "AU-VIC",
    "geo.placename": site.city,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className="h-full">
      <body className="site-shell">
        <JsonLd />
        <Header />
        <main
          id="main-content"
          className="site-main"
          itemScope
          itemType="https://schema.org/WebPage"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
