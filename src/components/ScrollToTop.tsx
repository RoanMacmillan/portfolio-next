import React from "react";
import arrow from "../../public/assets/icons/icon-arrow-up.svg";
import Image from "next/image";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="absolute bottom-[275px] right-[-40px] flex rotate-90 items-center gap-6"
      onClick={handleScrollToTop}
    >
      <p className="text-sm font-semibold">Scroll to Top</p>

      <Image
        alt={arrow}
        src={arrow}
        height={36}
        width={36}
        className="rotate-90"
      />
    </div>
  );
};

export default ScrollToTop;
