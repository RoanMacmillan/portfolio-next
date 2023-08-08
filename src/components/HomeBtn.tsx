import React, { RefObject } from "react";
import Image from "next/image";
import Ribbon from "../../public/assets/icons/ribbon.svg";
import Link from "next/link";

const HomeBtn = () => {
  return (
    <Link
      className={` absolute  bottom-[275px] left-[-10px] hidden -rotate-90 items-center gap-4 transition-opacity sm:bottom-[150px] customXXL:flex`}
      href="/"
    >
      <p className="text-sm font-semibold">Portfolio</p>

      <Image
        alt={Ribbon}
        src={Ribbon}
        height={24}
        width={24}
        className="transition-all duration-300 group-hover:scale-125"
      />
    </Link>
  );
};

export default HomeBtn;
