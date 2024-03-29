import React from "react";
import Image from "next/image";
import skills, { Skill } from "@/data/skills";

const SkillsGrid = () => {
  return (
    <div className="mx-auto mt-[60px] grid max-w-[1584px] grid-cols-2 px-6 md:grid-cols-4 customMd:px-20 lg:mt-[100px] xl:px-36">
      {skills.map((skill: Skill, index: number) => (
        <div
          key={index}
          className={`flex h-[275px] items-center justify-center border border-b-0 border-r-0 border-gray-200 md:border-b-[1px] 
          
          
          ${skill.name === "react" ? "border-b-[1px] border-r-[1px]" : ""}

          ${skill.name === "html" ? "border-b-[1px]" : ""}


          ${skill.name === "css" ? "border-r-[1px]" : ""}
          

          ${skill.name === "css" ? "md:border-r-0" : ""}


          
          `}
        >
          <Image
            src={skill.logo}
            alt={`${skill.name} Logo`}
            width={60}
            height={60}
            className={`translate-y-[10px] overflow-hidden opacity-0 delay-[${
              skill.id * 50
            }ms] transition-all duration-[.6s]`}
            onLoadingComplete={(image) => {
              image.classList.remove("opacity-0");
              image.classList.remove("translate-y-[10px]");
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
