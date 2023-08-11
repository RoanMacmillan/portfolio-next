import React from "react";
import ServicesFlex from "@/components/ServicesFlex";
import Image from "next/image";
import circles from "../../public/assets/icons/join.svg";

const ServicesContainer = () => {
  return (
    <div className="mt-[60px] bg-customBlack px-6 py-8 customMd:px-[0px] customMd:pb-[100px] customMd:pt-[64px] customMd:mt-[100px]">
      <div className="mx-auto max-w-[1440px] px-0 customMd:px-20">
        <Image
          src={circles}
          alt="Circles logo"
          width={48}
          height={48}
          className="brightness-0 invert-[1]"
        />

        <h1 className="mt-4 text-lg font-bold text-customWhite customMd:text-3xl">
          Services
        </h1>
        <p className="mt-4 text-customGray">
          You can check out what I do below
        </p>
      </div>

      <ServicesFlex />
    </div>
  );
};

export default ServicesContainer;
