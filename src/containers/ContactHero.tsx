import React from "react";
import photo from "../../public/assets/images/photos/footer-hero.webp";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const ContactHero = () => {
  const [dividerRef, dividerRefVisible] = useIntersectionObserver();

  return (
    <div
      ref={dividerRef}
      className={`relative mx-auto mt-[50px] flex h-[300px] transition-all duration-500 max-w-[1545px] justify-center customMd:mt-[143px] customMd:h-[480px] ${
        dividerRefVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
    >
      <Image alt="dark image" src={photo} className="object-cover" />
    </div>
  );
};

export default ContactHero;
