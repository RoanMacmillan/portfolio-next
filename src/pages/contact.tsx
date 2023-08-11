import React from "react";
import FormContainer from "@/containers/FormContainer";
import Footer from "@/components/Footer";
import ContactHero from "@/containers/ContactHero";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import LoadingBar from "@/components/LoadingBar";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const contact = () => {
  return (
    <>
      <Header />
<PageTransition>
      <div className="px-6 customMd:px-20">
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
