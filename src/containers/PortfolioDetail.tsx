// components/PortfolioDetail.tsx

import React from "react";
import { Project } from "@/data/projects";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import LoadingBar from "@/components/LoadingBar";

type PortfolioDetailProps = {
  project: Project;
};

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ project }) => {
  const [dividerRef1, dividerRefVisible1] = useIntersectionObserver();

  return (
    <div className="mx-auto mt-[50px] max-w-[1280px] customMd:mt-[80px]">
      <LoadingBar backgroundColorClass="bg-customBlack"></LoadingBar>
      {/* <div className="absolute left-0 top-0 h-1 w-full bg-customBlack"></div> */}

      {/* <p>{project.label}</p>
      <h1 className="mt-4 text-[60px] font-bold leading-[1] tracking-[-2px] lg:text-[80px]">
        {project.title}
      </h1>
      <div className="mt-6 h-[5px] w-14 bg-customBlack"></div> */}


<div className="mt-[0px] lg:mt-[0px]">
        <h2 className="text-customGray">About Project</h2>
        <div className="justify-between lg:mt-[50px] lg:flex">
          <div>
            <p className="mt-[20px] text-xl font-bold lg:mt-[0px] lg:w-[400px] lg:text-[32px] lg:leading-9">
              {project.smallDescription}
            </p>
          </div>

          <div className="lg:w-1/2">
            <p className="mt-8 text-[15px] leading-7 text-customGray lg:mt-[0px]">
              {project.background}
            </p>

            <div className="mt-8 flex gap-8 font-semibold">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  href={project.demoURL}
                >
                  View Site
                  <div className="relative mt-[5px] h-[2px] w-24 bg-gray-200">
                    <div className=" absolute left-0 top-0 h-[2px] w-0 bg-customBlack transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  href={project.codeURL}
                >
                  View Code
                  <div className="relative mt-[5px] h-[2px] w-24 bg-gray-200">
                    <div className=" absolute left-0 top-0 h-[2px] w-0 bg-customBlack transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



      
      <div className={`relative mt-[50px] overflow-hidden customMd:mt-[80px] lg:mt-[100px]`}>
        <Image
          src={project.detailStatic1}
          alt={project.detailStatic1}
          width={2858}
          height={1372}
          priority={true}
          className="transition-opacity duration-700 opacity-0"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>

      

      <div
        ref={dividerRef1}
        className={`relative mt-[91px] overflow-hidden lg:mt-[165px] ${
          dividerRefVisible1
            ? "translate-y-[-30px] opacity-100 transition-all duration-[800ms]"
            : "translate-y-0 opacity-0"
        }`}
      >
        <Image
          src={project.detailStatic3}
          alt={project.detailStatic3}
          width={2930}
          height={1802}
        />
      </div>

      <div className="mt-[60px] block h-[1px] w-full bg-gray-200 sm:hidden"></div>
    </div>
  );
};

export default PortfolioDetail;
