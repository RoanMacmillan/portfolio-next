import React from "react";
import skills, { Skill } from "@/data/skills";
import Image from "next/image";
import { motion } from "framer-motion";
import icon1 from "../../public/assets/icons/react.webp";
import icon2 from "../../public/assets/icons/java-script-logo.webp";
import icon3 from "../../public/assets/icons/css-3.webp";
import icon4 from "../../public/assets/icons/html-5-logotype.webp";

const SkillsGrid = () => {
  return (
    <div className="mx-auto mt-[60px] grid max-w-[1584px] xl:px-36 grid-cols-2 px-6 md:grid-cols-4 customMd:px-20 lg:mt-[100px]">
      <div className="flex h-[275px] items-center justify-center border border-b-0 border-r-0 border-gray-200 md:border-b-[1px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: -20 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <Image
            src={icon2}
            alt="React Logo"
            width={60}
            height={60}
            className={`overflow-hidden`}
            priority={true}
          />
        </motion.div>
      </div>

      <div className="flex h-[275px] items-center justify-center border border-b-0 border-gray-200 md:border-b-[1px] md:border-r-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            src={icon3}
            alt="React Logo"
            width={60}
            height={60}
            className={`overflow-hidden`}
            priority={true}
          />
        </motion.div>
      </div>

      <div className="flex h-[275px] items-center justify-center border border-r-0 border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={icon4}
            alt="React Logo"
            width={60}
            height={60}
            className={`overflow-hidden`}
            priority={true}
          />
        </motion.div>
      </div>

      <div className="flex h-[275px] items-center justify-center border border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: -20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            src={icon1}
            alt="React Logo"
            width={60}
            height={60}
            className={`overflow-hidden`}
            priority={true}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsGrid;
