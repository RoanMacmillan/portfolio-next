import React, { useState } from "react";
import Link from "next/link";
import close from "../../public/assets/icons/icon-close.svg";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative z-50 flex items-center justify-between px-6 py-8 customMd:fixed w-full">


      <Link
        className="text-[15px] font-bold tracking-[0.35em] text-customBlack"
        href="/"
      >
        RM
      </Link>

      <button
        className="flex h-6 w-5 flex-col items-center justify-center gap-[6px]"
        onClick={handleMenuToggle}
      >
        <div className="h-[2px] w-full bg-customBlack"></div>
        <div className="h-[2px] w-full bg-customBlack"></div>
      </button>



      <div
        className={`fixed left-0 top-0 z-20 h-full w-full bg-customBlack opacity-${
          isMobileMenuOpen ? "100" : "0"
        } transition-opacity ${isMobileMenuOpen ? "visible" : "invisible"} transition-visibility duration-200`}
      >
        <div className="flex items-center justify-between px-6 py-8">
          <Link
            className='text-[15px] font-bold tracking-[0.35em] text-white'
            href='/' 
          >
            RM
          </Link>

          <button onClick={handleMenuToggle}>
            <Image
              src={close}
              alt="Close Menu"
              width={28}
              height={28}
              className="brightness-0 invert-[1]"
            />
          </button>
        </div>
        
        {/* Your mobile menu content goes here */}
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
