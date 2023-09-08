import React from "react";
import Image from "next/image";
import icon1 from "../../public/assets/icons/react.webp";
import icon2 from "../../public/assets/icons/java-script-logo.webp";
import icon3 from "../../public/assets/icons/css-3.webp";
import icon4 from "../../public/assets/icons/html-5-logotype.webp";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const SkillsGrid = () => {
  const [skillRef, skillRefVisible] = useIntersectionObserver();
  const [skillRef2, skillRefVisible2] = useIntersectionObserver();
  const [skillRef3, skillRefVisible3] = useIntersectionObserver();
  const [skillRef4, skillRefVisible4] = useIntersectionObserver();

  return (
    <div className="mx-auto mt-[60px] grid max-w-[1584px] grid-cols-2 px-6 md:grid-cols-4 customMd:px-20 lg:mt-[100px] xl:px-36">
      <div className="flex h-[275px] items-center justify-center border border-b-0 border-r-0 border-gray-200 md:border-b-[1px] ">
        <div
          ref={skillRef}
          className={`${
            skillRefVisible
              ? "opacity-100 transition-opacity duration-500"
              : "opacity-0"
          }`}
        >
          <Image
            src={icon2}
            alt="React Logo"
            width={60}
            height={60}
            className={`overflow-hidden `}
            priority={true}
          />
        </div>
      </div>

      <div className="flex h-[275px] items-center justify-center border border-b-0 border-gray-200 md:border-b-[1px] md:border-r-0">
        <div
          ref={skillRef2}
          className={`${
            skillRefVisible2
              ? "opacity-100 transition-opacity delay-100 duration-500"
              : "opacity-0"
          }`}
        >
          <Image
            src={icon3}
            alt="React Logo"
            width={60}
            height={60}
            className={`overflow-hidden`}
            priority={true}
          />
        </div>
      </div>

      <div className="flex h-[275px] items-center justify-center border border-r-0 border-gray-200">
        <div
          ref={skillRef3}
          className={`${
            skillRefVisible3
              ? "opacity-100 transition-opacity delay-200 duration-500"
              : "opacity-0"
          }`}
        >
          <Image
            src={icon4}
            alt="React Logo"
            width={60}
            height={60}
            className={`overflow-hidden`}
            priority={true}
          />
        </div>
      </div>

      <div className="flex h-[275px] items-center justify-center border border-gray-200">
        <div
          ref={skillRef4}
          className={`${
            skillRefVisible4
              ? "opacity-100 transition-opacity delay-300 duration-500"
              : "opacity-0"
          }`}
        >
          <Image
            src={icon1}
            alt="React Logo"
            width={60}
            height={60}
            className={`overflow-hidden`}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
