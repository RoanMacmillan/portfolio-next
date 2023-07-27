import Image from "next/image";
import Hero from "@/containers/Hero";
import PortfolioIndex from "@/containers/PortfolioIndex";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="px-6">
      <Hero />
      <PortfolioIndex />
      <Footer title="Let's" emphasizedText="Talk" footerLink="Contact" />
    </main>
  );
}
