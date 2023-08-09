import React, { useEffect, useState, useRef, RefObject } from "react";
import Link from "next/link";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

interface FooterProps {
  title: string;
  emphasizedText: string;
  footerLink: string;
  link: string;
}

const Footer = ({ title, emphasizedText, footerLink, link }: FooterProps) => {
  const [dividerRef, dividerRefVisible] = useIntersectionObserver();
  const [footerRef, footerRefVisible] = useIntersectionObserver();

  return (
    <footer className="relative mx-auto mt-[60px] max-w-[1280px] pb-6 sm:mt-[100px] customMd:pb-[50px] lg:mt-[150px]">
      <div
        ref={dividerRef}
        className={`mb-[100px] hidden h-[1px] bg-gray-200 transition-all duration-[1000ms] sm:block ${
          dividerRefVisible ? "w-full" : "w-0"
        } `}
      ></div>

<div ref={footerRef} className={`${footerRefVisible ? 'transition-all duration-[1000ms] translate-y-0 opacity-100' : 'opacity-0 translate-y-[20px]'}`}>

      <h2 className="pb-[30px] text-[60px] font-light leading-[1] tracking-[-2px] lg:text-[70px]">
        {title}
        <br className="lg:hidden"></br>
        <span className="font-bold  lg:ml-[10px]">{emphasizedText}</span>
      </h2>

      <Link href={link} className="group font-semibold">
        {footerLink}
        <div className="relative mt-[5px] h-[2px] w-20 bg-gray-200">
          <div className=" absolute left-0 top-0 h-[2px] w-0 bg-customEmerald transition-all duration-300 group-hover:w-full"></div>
        </div>
      </Link>

      </div>

      <nav className="mt-[150px]">
        <div className="sm:flex sm:items-center sm:gap-2">
          <p className="text-sm text-customGray">Follow me</p>
          <div className="mt-6 flex flex-col text-xl font-medium text-customBlack sm:mt-0 sm:flex-row sm:gap-2 sm:text-sm">
            <a
              className="transition-colors hover:text-customEmerald"
              href="https://www.github.com/"
            >
              Github
            </a>
            <a
              className="transition-colors hover:text-customEmerald"
              href="https://www.linkedin.com/"
            >
              LinkedIn
            </a>
            <a
              className="transition-colors hover:text-customEmerald"
              href="https://twitter.com/"
            >
              Twitter
            </a>
            <a
              className="transition-colors hover:text-customEmerald"
              href="https://www.frontendmentor.io/"
            >
              Frontend Mentor
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm text-customGray sm:mt-0">
          Skill Icons created by Freepik - Flaticon
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
