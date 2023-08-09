import React from "react";
import FormContainer from "@/containers/FormContainer";
import Footer from "@/components/Footer";
import ContactHero from "@/containers/ContactHero";
import ScrollToTop from "@/components/ScrollToTop";


const contact = () => {
  return (
    <div className="px-6 customMd:px-20">
      <ContactHero />
      <ScrollToTop />
      <FormContainer />
      <Footer title='View' emphasizedText="Portfolio" footerLink="Portfolio" link='/' />
    </div>
  );
};

export default contact;
