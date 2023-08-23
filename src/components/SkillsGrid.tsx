import React, { useRef, useEffect, useState } from "react";
import skills, { Skill } from "@/data/skills";
import Image from "next/image";
import { motion } from "framer-motion";

const SkillsGrid = () => {
  return (
    <div className="mx-auto mt-[60px] grid max-w-[1440px] grid-cols-2 px-6 md:grid-cols-4 customMd:px-20">
      {skills.map((skill: Skill, index: number) => (
        <div key={index}>
          <div
            className={`${
              skill.name === "js"
                ? "border-b-0 border-r-0 md:border-b-[1px]"
                : ""
            } ${
              skill.name === "css"
                ? "border-b-0 md:border-b-[1px] md:border-r-[0]"
                : ""
            }   
            
            ${skill.name === "html" ? "border-r-0" : ""}    
            
            flex h-[275px] items-center justify-center border border-gray-200`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: -20 }}
              transition={{ duration: 0.8, delay: .4 }}
            >
              <Image
                src={skill.logo}
                alt={skill.logo}
                width={60}
                height={60}
                className={`overflow-hidden`}
                priority={true}
              />
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
