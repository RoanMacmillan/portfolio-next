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
      ref={dividerRef}
      onClick={handleScrollToTop}
      className={`absolute bottom-[175px] group rotate-90 flex  items-center gap-6 cursor-pointer ${
        dividerRefVisible
          ? "right-[-35px] transition-all delay-200 duration-1000"
          : "right-[-91px]"
      }`}
    >
      <div className="font-semibold  text-[15px]">Scroll to top</div>
      <div>

      <Image 
      
      alt='Top Button'
      src={arrow}
      width={36}
      height={36}
      className="rotate-90 group-hover:scale-125 transition-all duration-[600ms]"
      
      />

      </div>
    </div>
  );
};

export default ScrollToTop;
