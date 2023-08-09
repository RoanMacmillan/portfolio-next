import Image from "next/image";
import Hero from "@/containers/Hero";
import PortfolioIndex from "@/containers/PortfolioIndex";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="px-6 customMd:px-20">
      <Hero />

      <ScrollToTop />
      
      <PortfolioIndex />
      <Footer title="Let's" emphasizedText="Talk" footerLink="Contact" link='/contact' />
    </main>
  );
}
