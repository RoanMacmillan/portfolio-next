import React from "react";
import FormContainer from "@/containers/FormContainer";
import Footer from "@/components/Footer";
import ContactHero from "@/containers/ContactHero";
import ScrollToTop from "@/components/ScrollToTop";
import useIntersectionObserver from '@/hooks/useIntersectionObserver'


const contact = () => {

  const [dividerRef, dividerRefVisible] = useIntersectionObserver();


  return (
    <div className="px-6 customMd:px-20">
      <div ref={dividerRef} className={`absolute left-0 top-0 h-1 bg-customBlack ${dividerRefVisible ? 'w-full transition-all duration-[650ms]' : 'w-0'}`}></div>

      <ContactHero />
      <FormContainer />
      <Footer title='View' emphasizedText="Portfolio" footerLink="Portfolio" link='/' />
    </div>
  );
};

export default contact;
