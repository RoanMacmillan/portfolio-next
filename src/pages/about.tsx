import React from "react";
import AboutHero from "@/containers/AboutHero";
import SkillsGrid from "@/components/SkillsGrid";
import Footer from "@/components/Footer";
import ServicesContainer from "@/containers/ServicesContainer";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingBar from "@/components/LoadingBar";
import Header from "@/components/Header";
import HomeBtn from "@/components/HomeBtn";
import Layout from "./layout";

const about = () => {
  return (
    <>
      <ScrollToTop />
      <HomeBtn />

      <Header colorScheme="black" absolutePosition={false} />


    <Layout>


        <LoadingBar backgroundColorClass="bg-customBlack" />

        <AboutHero />
        <SkillsGrid />
        <ServicesContainer />
        <div className="mx-auto max-w-[1584px] px-4 xl:px-36 customMd:px-20 ">
          <Footer
            title="Let's"
            emphasizedText="Talk"
            footerLink="Contact"
            link="/contact"
          />
        </div>
        </Layout>
    </>
  );
};

export default about;
