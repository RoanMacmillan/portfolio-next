import React from "react";
import photo from "../../public/assets/images/photos/footer-hero.webp";
import Image from "next/image";

const ContactHero = () => {
  return (
    <div
      className={`relative mx-auto mt-[50px] flex h-[300px] max-w-[1545px] justify-center transition-all duration-500 customMd:mt-[143px] customMd:h-[480px]`}
    >
      <Image
        alt="dark image"
        src={photo}
        quality={50}
        priority={true}
        className="object-cover opacity-0 transition-all duration-700"
        
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}

      />
    </div>
  );
};

export default ContactHero;
