import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative flex items-center justify-between px-6 py-8">
      <div className="absolute left-0 top-0 h-1 w-full bg-customBlack"></div>

      <Link
        className="text-[15px] font-bold tracking-[0.35em] text-customBlack"
        href="/"
      >
        RM
      </Link>

      <div className="flex h-6 w-5 flex-col items-center justify-center gap-[6px]">
        <div className="h-[2px] w-full  bg-customBlack"></div>
        <div className="h-[2px] w-full bg-customBlack"></div>
      </div>
    </header>
  );
};

export default Header;
