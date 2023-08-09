import React from "react";
import arrow from "../../public/assets/icons/icon-arrow-up.svg";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [dividerRef, dividerRefVisible] = useIntersectionObserver();

  return <div></div>;
};

export default ScrollToTop;
