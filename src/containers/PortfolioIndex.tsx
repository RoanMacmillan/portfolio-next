import React, { useEffect, useRef, useState } from "react";
import projects, { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import LoadingModal from "@/components/LoadingModal";
import Hero from "./Hero";

const PortfolioIndex = () => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Start with isLoading true

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imageIndex = parseInt(entry.target.getAttribute("data-index")!);
          if (!visibleImages.includes(imageIndex)) {
            setVisibleImages((prevVisibleImages) => [
              ...prevVisibleImages,
              imageIndex,
            ]);
          }
        }
      });
    });

    document.querySelectorAll(".portfolio-image").forEach((image) => {
      observer.observe(image);
    });

    return () => {
      observer.disconnect();
    };
  }, [visibleImages]);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // After a delay, set isLoading to false
    }, 1150); // Adjust the delay time (in milliseconds) as needed

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (

<>

<div  className={`absolute left-0 top-0 h-1 w-full bg-customBlack ${isLoading ? 'invisible' : 'visible'}`}></div>


<Hero isLoading={isLoading} />

    <div className="mx-auto mt-[50px]  max-w-[1280px] justify-between sm:grid sm:grid-cols-2 sm:gap-24 lg:mt-[150px]">
      <LoadingModal isLoading={isLoading} />

      {/* Show LoadingModal when isLoading is true */}
      {projects.map((project: Project, index: number) => (
        <div
          key={index}
          className={`mt-[0px] sm:max-w-[500px]  ${
            project.title === "Arch"
              ? "sm:mt-[-100px] lg:ml-auto lg:mt-[-160px]"
              : ""
          } ${
            project.title === "Minimal"
              ? "sm:mt-[-100px] lg:ml-auto lg:mt-[-160px]"
              : ""
          }

              

          ${project.title === "Audio" ? "" : ""}
          
          
          `}
        >
          <div
            className={`portfolio-image transition-all ${
              isLoading ? "delay-[2000ms]" : "delay-0"
            } duration-1000 ${
              visibleImages.includes(index)
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            data-index={index}
          >
            
              <div className="overflow-hidden">

            <Link href={`/portfolio/${project.slug}`}>
              <Image
                src={project.thumbnail}
                alt={project.thumbnail}
                priority
                height={1302}
                width={1406}
                className={`transition-all duration-700 hover:scale-105`}
              />
            </Link>


            </div>


            <p className="mt-10 text-customBlack">{project.label}</p>
            <h2 className="mt-4 text-xl font-bold text-customBlack lg:mt-6 lg:text-3xl">
              {project.title}
            </h2>
            <p className="mt-4 text-customGray lg:mt-8">
              {project.description}
            </p>

          </div>


          <div className="mb-[60px] mt-[30px] block h-[1px] w-full bg-gray-200 sm:hidden"></div>
        </div>
      ))}
    </div>

    </>
  );
};

export default PortfolioIndex;
