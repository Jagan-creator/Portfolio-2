import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "./hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="md:h-[630px] lg:h-[630px] orange-pink-gradient p-[2px] rounded-[17px] shadow-card mx-2"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-black p-5 rounded-2xl h-full sm:w-[340px] flex flex-col"
        >
          <div className="relative w-full h-[240px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 flex-grow">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <ul className="mt-2 text-secondary text-[14px] list-disc pl-5">
              {description.map((point, idx) => (
                <li
                  key={`desc-point-${idx}`}
                  className="mb-1"
                >
                  <span></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore a showcase of projects that I thoroughly enjoyed coding and am
          proud to present in my portfolio. These projects reflect a diverse
          range of web development skills, with a focus on frontend visuals,
          backend batabases, and fullstack applications. I am continually
          seeking opportunities to expand my portfolio, looking forward to
          learning and creating more intuitive and creative applications.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
