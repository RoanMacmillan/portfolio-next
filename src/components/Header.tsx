import React, { useState } from "react";
import Link from "next/link";
import close from "../../public/assets/icons/icon-close.svg";
import Image from "next/image";
import ModalMenu from "./ModalMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50 flex w-full items-center justify-between px-6 py-8 customMd:fixed">
      <Link
        className="text-[15px] uppercase font-bold tracking-[0.35em] text-customBlack transition-colors duration-300 hover:text-customEmerald "
        href="/"
      >
      rm
      </Link>

      <button
        className="flex h-6 w-5 flex-col items-center justify-center gap-[6px] hover:scale-125 transition-all duration-300 group  "
        onClick={handleMenuClick}
      >
        <div className="h-[2px] w-full bg-customBlack group-hover:bg-customEmerald transition-all duration-300"></div>
        <div className="h-[2px] w-full bg-customBlack group-hover:bg-customEmerald transition-all duration-300"></div>
      </button>

      <ModalMenu isOpen={isMenuOpen} onClose={handleMenuClick} />
    </header>
  );
};

export default Header;
