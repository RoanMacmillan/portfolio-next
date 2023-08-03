import React from "react";
import Image from "next/image";
import services, { Service } from "@/data/services";

const ServicesFlex = () => {
  return (
    <div className="mx-auto mt-8 flex max-w-[1440px] flex-col gap-4 customMd:mt-[72px] customMd:flex-row customMd:gap-6 px-4 customMd:px-20">
      {services.map((service: Service, index: number) => (
        <div key={index}>
          <div className="border border-outlineGray px-6 py-[40px] customMd:p-[40px]">
            <Image
              width={32}
              height={32}
              src={service.image}
              alt={service.image}
              className="brightness-0 invert-[1]"
            />

            <h2 className="my-6 font-bold text-customWhite">
              {service.heading}
            </h2>
            <p className="text-customGray">{service.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesFlex;
