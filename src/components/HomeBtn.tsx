import React from 'react'
import Image from "next/image";
import Ribbon from '../../public/assets/icons/ribbon.svg'
import Link from 'next/link';


const HomeBtn = () => {
  return (
    <Link
      className="absolute bottom-[275px] left-[-10px] customXXL:flex -rotate-90 items-center gap-4 sm:bottom-[150px] hidden"
      href='/'
    >
      <p className="text-sm font-semibold">Portfolio</p>

      <Image
        alt={Ribbon}
        src={Ribbon}
        height={24}
        width={24}
        className="-hue-rotate-180"
      />
      
    </Link>
  )
}

export default HomeBtn
