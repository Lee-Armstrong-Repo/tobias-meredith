import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { site } from "../../content/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Tattoo Artist`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Tobias Meredith",
    "tattoo artist",
    "custom tattoos",
    "fine line tattoo",
    "blackwork tattoo",
    "illustrative tattoo",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Tattoo Artist`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Tattoo Artist`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${display.variable} ${body.variable} h-full`}>
      <body className="site-shell antialiased">
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
