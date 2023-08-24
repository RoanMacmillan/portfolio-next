import React, { RefObject } from "react";
import Image from "next/image";
import Ribbon from "../../public/assets/icons/ribbon.svg";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Link from "next/link";

const HomeBtn = () => {
  const [dividerRef, dividerRefVisible] = useIntersectionObserver();

  return (

    <Link href='/'>

    <div
      ref={dividerRef}
      className={`group absolute bottom-[150px] hidden -rotate-90 cursor-pointer items-center gap-4 customXXL:flex ${
        dividerRefVisible
          ? "left-[-10px] transition-all delay-200 duration-1000"
          : "left-[-59px]"
      }`}
    >
      <div className="text-[15px]  font-semibold">Portfolio</div>
      <div>
        <Image
          alt="Top Button"
          src={Ribbon}
          width={26}
          height={26}
          className=" transition-all duration-[600ms] group-hover:scale-125"
        />
      </div>
    </div>
    </Link>
  );
};

export default HomeBtn;
