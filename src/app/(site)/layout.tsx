import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="site-main">
        {children}
      </main>
      <Footer />
    </>
  );
}
