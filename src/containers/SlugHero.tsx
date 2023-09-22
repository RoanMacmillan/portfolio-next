import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import heroImg from "../../public/assets/images/photos/slughero3.png";
import { motion } from "framer-motion";

type PortfolioDetailProps = {
  project: Project;
};

const SlugHero: React.FC<PortfolioDetailProps> = ({ project }) => {
  return (
    <div>
      <div className=" relative z-30 flex w-full items-center bg-customGray">
        <div className="fixed left-0 top-0 -z-10 h-[88px] w-full bg-customBlack"></div>

        <div className="absolute left-6 z-10 mx-auto w-full max-w-[1280px] customMd:left-[80px] xl:left-[144px] customXXL:left-0 customXXL:right-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <p className="text-customWhite">{project.label}</p>
            <h1 className="mt-4 text-[60px] font-bold leading-[1] tracking-[-2px] text-customWhite customMd:mt-8 lg:text-[80px]">
              {project.title}
            </h1>
            <div className="mt-6 h-[5px] w-14 bg-customWhite customMd:mt-8"></div>


            {/* <p className="mt-8 text-customWhite text-[15px]"></p> */}

            {/* <Image src={mouse} alt="Hero Image" width={50} priority className='mouse absolute left-[-10px] top-[175px]  customMd:top-[257px]' /> */}

            <div className="mt-[100px] flex h-[47px] w-[33px] justify-center rounded-full border-2 border-customWhite">
              <div className="mt-[6px] h-[11px] w-[2px] bg-customWhite"></div>
            </div>
          </motion.div>
        </div>

        <div className="vignette-image-container containerHeight relative h-[900px] w-full">
          <Image
            src={project.photoThumbnail}
            alt="Hero Image"
            priority
            fill
            className={`brightnessHero h-full w-full scale-x-[-1] object-cover grayscale-[15%] ${project.slug === 'arch' ? 'scale-x-[1]' : ''}  `}
          />
          <div className="fadeInOverlay absolute left-0 top-0 h-full w-full bg-black opacity-[0%]"></div>
          {/* <div className="vignette-overlay"></div> */}
        </div>
      </div>
    </div>
  );
};

export default SlugHero;