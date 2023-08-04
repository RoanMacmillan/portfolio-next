import React from "react";
import photo from "../../public/assets/images/photos/footer-hero.webp";
import Image from "next/image";

const ContactHero = () => {
  return (
    <div className="flex justify-center max-w-[1545px] h-[300px] customMd:h-[480px] mt-[50px] customMd:mt-[143px] mx-auto relative">
        <Image alt="dark image" src={photo} className="object-cover" />
    </div>
  );
};

export default ContactHero;
