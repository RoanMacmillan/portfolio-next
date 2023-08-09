import React, { useRef, useEffect, useState } from "react";
import skills, { Skill } from "@/data/skills";
import Image from "next/image";

const SkillsGrid = () => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

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

    document.querySelectorAll(".grid-image").forEach((image) => {
      observer.observe(image);
    });

    return () => {
      observer.disconnect();
    };
  }, [visibleImages]);

  return (
    <div className="mx-auto mt-[60px] grid max-w-[1440px] grid-cols-2 px-4 md:grid-cols-4 customMd:px-20">
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
            <Image
              src={skill.logo}
              alt={skill.logo}
              width={60}
              height={60}
              className={`grid-image overflow-hidden transition-all duration-1000 ${
                visibleImages.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              data-index={index}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
