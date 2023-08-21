import React from "react";
import photo from "../../public/assets/images/photos/footer-hero.webp";
import Image from "next/image";

const ContactHero = () => {

  return (
    <div
      className={`relative mx-auto mt-[50px] flex h-[300px] transition-all duration-500 max-w-[1545px] justify-center customMd:mt-[143px] customMd:h-[480px]`}
    >
      <Image alt="dark image" src={photo} className="object-cover" priority={true} />
    </div>
  );
};

export default ContactHero;
