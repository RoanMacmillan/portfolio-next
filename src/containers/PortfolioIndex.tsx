import React from "react";
import projects, { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const PortfolioIndex = () => {
  return (
    <div className="mx-auto mt-[50px] max-w-[1280px] justify-between sm:grid sm:grid-cols-2 sm:gap-24 lg:mt-[150px]">
      {projects.map((project: Project, index: number) => (
        <div
          key={index}
          className={`mt-[0px] sm:max-w-[500px]  ${
            project.slug === "Arch"
              ? "sm:mt-[-100px] lg:ml-auto lg:mt-[-160px]"
              : ""
          } ${
            project.slug === "Minimal"
              ? "sm:mt-[-100px] lg:ml-auto lg:mt-[-160px]"
              : ""
          }
          ${project.slug === "Audio" ? "" : ""}
          
          
          `}
        >
          <Link href={`/portfolio/${project.slug}`}>
            <Image
              src={project.thumbnail}
              alt={project.thumbnail}
              priority
              height={1302}
              width={1406}
            />
          </Link>

          <p className="mt-10 text-customBlack">{project.label}</p>
          <h2 className="mt-4 text-xl font-bold text-customBlack lg:mt-6 lg:text-3xl">
            {project.title}
          </h2>
          <p className="mt-4 text-customGray lg:mt-8">{project.description}</p>
          <div className="mt-[30px] block h-[1px] w-full bg-gray-200 sm:hidden"></div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioIndex;
