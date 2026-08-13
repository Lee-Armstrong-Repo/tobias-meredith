import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { site } from "../../content/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Melbourne Tattoo Artist`,
    template: `%s | ${site.name} Melbourne`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
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
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — Melbourne tattoo artist`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Melbourne Tattoo Artist`,
    description: site.description,
    images: ["/opengraph-image"],
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
    <html
      lang="en-AU"
      className={`h-full ${poppins.variable} ${cormorant.variable}`}
    >
      <body className="site-shell">
        <JsonLd />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="site-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
