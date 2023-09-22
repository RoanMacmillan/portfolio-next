import React, { useState, useEffect } from "react";
import Link from "next/link";
import ModalMenu from "./ModalMenu";

type ColorScheme = "black" | "white";

interface HeaderProps {
  colorScheme: ColorScheme;
  absolutePosition: boolean;
}

const Header = ({ colorScheme, absolutePosition }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerTextColorClass =
    colorScheme === "black" ? "text-black" : "text-customWhite";
  const headerLineColorClass =
    colorScheme === "black" ? "bg-black" : "bg-customWhite";

  return (
    <header
      className={`${
        absolutePosition ? "test123" : ""
      } relative z-50 flex w-full items-center justify-between px-6 py-8 customMd:fixed xl:px-[30px] 
      
      
      
      `}
    >
      <Link
        className={`text-[15px] font-bold uppercase tracking-[0.35em] ${headerTextColorClass} transition-colors duration-300 hover:text-customEmerald`}
        href="/"
      >
        rm
      </Link>
      <button
        className="group flex h-6 w-5 flex-col items-center justify-center gap-[6px] transition-all duration-300 hover:scale-125  "
        onClick={handleMenuClick}
      >
        <div
          className={`h-[2px] w-full ${headerLineColorClass} transition-all duration-300 group-hover:bg-customEmerald`}
        ></div>
        <div
          className={`h-[2px] w-full ${headerLineColorClass} transition-all duration-300 group-hover:bg-customEmerald`}
        ></div>
      </button>

      <ModalMenu isOpen={isMenuOpen} onClose={handleMenuClick} />
    </header>
  );
};

export default Header;
