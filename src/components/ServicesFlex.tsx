import React, { useRef, useEffect } from "react";
import Image from "next/image";
import services, { Service } from "@/data/services";

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    const elements = containerRef.current?.querySelectorAll(".ttt"); 
    if (elements) {
      elements.forEach(element => {
        observer.observe(element);
      });
    }

    return () => {
      observer.disconnect(); 
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-reveal-container">
      {children}
    </div>
  );
};


const ServicesFlex = () => {
  return (
    <ScrollReveal>
      <div className="mx-auto mt-8 flex max-w-[1440px] flex-col gap-4 customMd:px-[80px] lg:mt-[72px] justify-between lg:flex-row lg:gap-6 px-0 lg:px-20">
        {services.map((service: Service, index: number) => (
          <div key={index} className="ttt">
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
              <p className="text-customGray text-[15px]">{service.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
};

export default ServicesFlex;
