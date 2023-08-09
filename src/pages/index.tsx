import Image from "next/image";
import Hero from "@/containers/Hero";
import PortfolioIndex from "@/containers/PortfolioIndex";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingModal from "@/components/LoadingModal";
import React, { useState, useEffect } from "react";

export default function Home() {


  


  return (
    <main className="px-6 customMd:px-20">

      {/* <Hero /> */}


      <PortfolioIndex />
      <Footer
        title="Let's"
        emphasizedText="Talk"
        footerLink="Contact"
        link="/contact"
      />
    </main>
  );
}
