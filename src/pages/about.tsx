import React from "react";
import AboutHero from "@/containers/AboutHero";
import SkillsGrid from "@/components/SkillsGrid";
import Footer from "@/components/Footer";
import ServicesContainer from "@/containers/ServicesContainer";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingBar from "@/components/LoadingBar";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import HomeBtn from "@/components/HomeBtn";

const about = () => {
  return (
    <>
      <ScrollToTop />
      <HomeBtn />

      <Header />

      <PageTransition>
        <LoadingBar backgroundColorClass="bg-customBlack" />

        <AboutHero />
        <SkillsGrid />
        <ServicesContainer />
        <div className="mx-auto max-w-[1440px] px-4 customMd:px-20 xl:px-36">
          <Footer
            title="Let's"
            emphasizedText="Talk"
            footerLink="Contact"
            link="/contact"
          />
        </div>
      </PageTransition>
    </>
  );
};

export default about;
