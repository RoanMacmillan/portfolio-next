import React from "react";
import arrow from "../../public/assets/icons/icon-arrow-up.svg";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [dividerRef, dividerRefVisible] = useIntersectionObserver();

  return (


      <div
        className={`group absolute cursor-pointer bottom-[275px] right-[-40px]  flex flex-row items-center rotate-90 gap-6 sm:bottom-[150px] ${dividerRefVisible ? 'opacity-100 transition-opacity delay-200 duration-1000' : 'opacity-0'} ` }
        onClick={handleScrollToTop}
        ref={dividerRef}
      >


        <p className="text-sm font-semibold">Scroll to Top</p>

        <Image
          alt={arrow}
          src={arrow}
          height={36}
          width={36}
          className="rotate-90 transition-all duration-300 group-hover:scale-125"
        />
      </div>
  );
};

export default ScrollToTop;
