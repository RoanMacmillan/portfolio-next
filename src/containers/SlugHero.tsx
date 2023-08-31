import React from 'react';
import Image from 'next/image';
import { Project } from "@/data/projects";
import heroImg from '../../public/assets/images/photos/slughero3.png';
import { motion } from "framer-motion";


type PortfolioDetailProps = {
    project: Project;
  };

const SlugHero: React.FC<PortfolioDetailProps> = ({ project }) => {
  return (
    <div>
      <div className=" w-full bg-customGray relative flex items-center z-30">

    {/* <div className="bg-customBlack fixed w-full h-[88px] top-0 left-0 -z-10"></div> */}


 


        <div className='absolute left-6 customMd:left-[80px] xl:left-[144px] w-full max-w-[1280px] mx-auto customXXL:left-0 customXXL:right-0 z-10'>


        <motion.div
        initial={{ opacity: 0,  y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >

      <p className="text-customWhite">{project.label}</p>
        <h1 className="mt-4 text-[60px] customMd:mt-8 font-bold text-customWhite leading-[1] tracking-[-2px] lg:text-[80px]">
          {project.title}
        </h1>
        <div className="mt-6 h-[5px] w-14 bg-customWhite customMd:mt-8"></div>

        {/* <Image src={mouse} alt="Hero Image" width={50} priority className='mouse absolute left-[-10px] top-[175px]  customMd:top-[257px]' /> */}

        <div className='w-[33px] h-[47px] border-2 border-customWhite rounded-full flex justify-center mt-[100px]'>

        <div className='w-[2px] h-[11px] bg-customWhite mt-[6px]'></div>

        </div>
        </motion.div>


        </div>

        

        <div className="vignette-image-container containerHeight h-[900px] w-full relative">
        <Image src={heroImg} alt="Hero Image" priority className='object-cover w-full h-full brightnessHero grayscale-[15%] scale-x-[-1]' />
        <div className='w-full h-full absolute top-0 left-0 bg-black opacity-[0%] fadeInOverlay'></div>
        {/* <div className="vignette-overlay"></div> */}
        </div>
      </div>
    </div>
  );
}

export default SlugHero;

