import React from "react";
import FormContainer from "@/containers/FormContainer";
import Footer from "@/components/Footer";
import ContactHero from "@/containers/ContactHero";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingBar from "@/components/LoadingBar";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import HomeBtn from "@/components/HomeBtn";

const contact = () => {
  return (
    <>
      <ScrollToTop />
      <HomeBtn />

      <Header />
      <PageTransition>
        <div className="px-6 customMd:px-20 xl:px-36">
          <LoadingBar backgroundColorClass="bg-customBlack" />

          <ContactHero />
          <FormContainer />
          <Footer
            title="View"
            emphasizedText="Portfolio"
            footerLink="Portfolio"
            link="/"
          />
        </div>
      </PageTransition>
    </>
  );
};

export default contact;
