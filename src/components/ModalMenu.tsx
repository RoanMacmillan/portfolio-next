// components/ModalMenu.js
import React, { useState, useEffect } from "react";
import close from "../../public/assets/icons/icon-close.svg";
import Image from "next/image";
import Link from "next/link";

interface ModalMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalMenu = ({ isOpen, onClose }: ModalMenuProps) => {
  const handleLinkClick = () => {
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup the effect
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed left-0 top-0 flex h-full w-full flex-col justify-center bg-customBlack px-6 py-8 transition-opacity duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >

      {/* <div className="bg-customEmerald w-full absolute top-0 h-1 left-0"></div> */}


      <button
        onClick={onClose}
        className="group absolute right-[20px] top-[28px]"
      >
        <Image
          src={close}
          alt="Close"
          width={32}
          height={32}
          className="closeBtn gha brightness-0 invert-[1] transition duration-300 group-hover:scale-125"
        />
      </button>

      <Link
        className="absolute left-[24px] top-[32px] text-[15px] font-bold tracking-[0.35em] text-customWhite transition-colors duration-300  hover:text-customEmerald"
        href="/"
        onClick={handleLinkClick}
      >
        RM
      </Link>

      <div className="mt-auto flex items-center justify-between customMd:mx-auto customMd:w-full customMd:max-w-[1280px]">
        <nav
          className={` ${
            isOpen
              ? "translate-y-0 opacity-100 transition-all delay-200 duration-700"
              : "translate-y-6 opacity-0"
          } test flex flex-col text-[60px] font-light leading-[64px] text-customOffWhite customMd:text-[80px] customMd:leading-[108px]
        
        
        `}
        >
          <Link
            onClick={handleLinkClick}
            className="transition-colors duration-300 hover:text-white"
            href="/"
          >
            Portfolio
          </Link>
          <Link
            onClick={handleLinkClick}
            className="transition-colors duration-300 hover:text-white"
            href="/about"
          >
            About me
          </Link>
          <Link
            onClick={handleLinkClick}
            className="transition-colors duration-300 hover:text-white"
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        <div className=" hidden w-1/2 customMd:block">
          <p className="text-[15px] text-customGray">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>

      <div className="mt-auto customMd:mx-auto customMd:w-full customMd:max-w-[1280px]">
        <div className="sm:flex sm:items-center sm:gap-2">
          <p className="text-sm text-customGray">Follow me</p>
          <div className="mt-2 flex flex-col text-xl font-medium text-customWhite sm:mt-0 sm:flex-row sm:gap-2 sm:text-sm">
            <a
              className="transition-colors duration-300 hover:text-customEmerald"
              href="https://www.github.com/"
            >
              Github
            </a>
            <a
              className="transition-colors duration-300 hover:text-customEmerald"
              href="https://www.linkedin.com/"
            >
              LinkedIn
            </a>
            <a
              className="transition-colors duration-300 hover:text-customEmerald"
              href="https://twitter.com/"
            >
              Twitter
            </a>
            <a
              className="transition-colors duration-300 hover:text-customEmerald"
              href="https://www.frontendmentor.io/"
            >
              Frontend Mentor
            </a>
          </div>
        </div>

        <p className="mt-2 text-sm text-customGray sm:mt-0">
          Skill Icons created by Freepik - Flaticon
        </p>
      </div>
    </div>
  );
};

export default ModalMenu;
