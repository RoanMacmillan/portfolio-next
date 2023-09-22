import React, { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "@/containers/Hero";
import PortfolioIndex from "@/containers/PortfolioIndex";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingModal from "@/components/LoadingModal";
import Header from "@/components/Header";
import HomeBtn from "@/components/HomeBtn";
import Layout from "./layout";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // Start with isLoading true

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // After a delay, set isLoading to false
    }, 1150); // Adjust the delay time (in milliseconds) as needed

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <>

      <ScrollToTop />
      <HomeBtn />

      <div className={`${isLoading ? "invisible" : "visible"}`}>
      <Header colorScheme="black" absolutePosition={false} />
      </div>

        <div className="absolute left-0 top-0 h-1 w-full bg-customBlack"></div>

        <LoadingModal isLoading={isLoading} />

      <Layout>


        <main
          className={`px-6 customMd:px-20 xl:px-36 ${
            isLoading ? "invisible" : "visible"
          }`}
        >
          <Hero />

          <PortfolioIndex isLoading={isLoading} />
          <Footer
            title="Let's"
            emphasizedText="Talk"
            footerLink="Contact"
            link="/contact"
          />
        </main>
        </Layout>
    </>
  );
};

export default Home;
