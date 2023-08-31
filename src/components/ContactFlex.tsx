import React from "react";
import Image from "next/image";
import mail from "../../public/assets/icons/mail.svg";
import location from "../../public/assets/icons/location.svg";
import phone from "../../public/assets/icons/phone.svg";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const ContactFlex = () => {
  const [cardRef, cardRefVisible] = useIntersectionObserver();
  const [cardRef2, cardRefVisible2] = useIntersectionObserver();
  const [cardRef3, cardRefVisible3] = useIntersectionObserver();


  return (
    <div className="customMd:mt-24 customMd:flex">
      <div ref={cardRef} className={`mt-20 p-8 customMd:mt-0 customMd:px-14 customMd:py-12 customMd:pl-0 ${cardRefVisible ? 'transition-all opacity-100 duration-700 translate-y-[0px]' : 'opacity-0 translate-y-[20px]'}`}>
        <Image src={mail} alt={mail} width={28} height={28} />

        <h3 className="test12 mt-6 text-lg font-bold">
          roanmacmillan@hotmail.com
        </h3>
        <p className="mt-6 text-[15px] text-customGray">
          Send me a message and I will reach out as soon as possible.
        </p>
      </div>

      <div ref={cardRef2} className={`mt-4 border p-8 customMd:mt-0 customMd:px-14 customMd:py-12 ${cardRefVisible2 ? 'transition-all delay-100 opacity-100 duration-700 translate-y-[0px]' : 'opacity-0 translate-y-[20px]'}`}>
        <Image src={location} alt={location} width={28} height={28} />

        <h3 className="mt-6 text-lg font-bold">Edinburgh, Scotland</h3>
        <p className="mt-6 text-[15px] text-customGray">
          Based in Edinburgh UK. Open to onsite or remote roles.
        </p>
      </div>

      <div ref={cardRef3} className={`mt-4 p-8 customMd:mt-0 customMd:px-14 customMd:py-12 customMd:pr-0 ${cardRefVisible3 ? 'transition-all delay-200 opacity-100 duration-700 translate-y-[0px]' : 'opacity-0 translate-y-[20px]'}`}>
        <Image src={phone} alt={phone} width={28} height={28} />

        <h3 className="mt-6 text-lg font-bold">(44) 123-3210</h3>
        <p className="mt-6 text-[15px] text-customGray">
          I work from Monday to Friday. Feel free to reach out!
        </p>
      </div>
    </div>
  );
};

export default ContactFlex;
