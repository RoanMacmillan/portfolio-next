import React, { RefObject } from "react";
import Image from "next/image";
import Ribbon from "../../public/assets/icons/ribbon.svg";
import Link from "next/link";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const HomeBtn = () => {


  const [dividerRef, dividerRefVisible] = useIntersectionObserver();


  return (
    <div
    ref={dividerRef}
    className={`absolute bottom-[150px] group -rotate-90 hidden customXXL:flex items-center gap-4 cursor-pointer ${
      dividerRefVisible
        ? "left-[-10px] transition-all delay-200 duration-1000"
        : "left-[-59px]"
    }`}
  >
    <div className="font-semibold  text-[15px]">Portfolio</div>
    <div>

    <Image 
    
    alt='Top Button'
    src={Ribbon}
    width={26}
    height={26}
    className=" group-hover:scale-125 transition-all duration-[600ms]"
    
    />

    </div>
  </div>
  );
};

export default HomeBtn;
