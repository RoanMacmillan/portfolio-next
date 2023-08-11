import React from "react";
import FormContainer from "@/containers/FormContainer";
import Footer from "@/components/Footer";
import ContactHero from "@/containers/ContactHero";
import ScrollToTop from "@/components/ScrollToTop";


const contact = () => {



  return (
    <div className="px-6 customMd:px-20">
      <div className={`absolute left-0 top-0 h-1 bg-customBlack`}></div>

      <ContactHero />
      <FormContainer />
      <Footer title='View' emphasizedText="Portfolio" footerLink="Portfolio" link='/' />
    </div>
  );
};

export default contact;
