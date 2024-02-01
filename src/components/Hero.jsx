import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import "animate.css";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ffa200]" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>

        {/* introduction */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-[#ffa200]">
              <span
                className="inline-block animate__animated animate__fadeInDownBig"
                style={{ animationDelay: "0.4s" }}
              >
                J
              </span>
              <span
                className="inline-block animate__animated animate__fadeInDownBig"
                style={{ animationDelay: "0.8s" }}
              >
                o
              </span>
              <span
                className="inline-block animate__animated animate__fadeInDownBig"
                style={{ animationDelay: "1.2s" }}
              >
                e
              </span>
              <span
                className="inline-block animate__animated animate__fadeInDownBig"
                style={{ animationDelay: "1.6s" }}
              >
                l
              </span>
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, <br className="sm:block hidden" />
            user interfaces, and <br className="sm:block hidden" />
            digital experiences
          </p>
        </div>

        {/* Icons */}
        <div className="hidden lg:flex ml-auto items-center mt-9">
          <a
            href="https://github.com/Jagan-creator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-[31px] mx-5 cursor-pointer hover:text-[#ffa200] transform hover:scale-110" />
          </a>
          <a
            href="https://resume.creddle.io/resume/5wh3kh8ktcc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoNewspaperSharp className="text-white text-[31px] mx-5 cursor-pointer hover:text-[#ffa200] transform hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/joel-hagan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-[31px] mx-5 cursor-pointer hover:text-[#ffa200] transform hover:scale-110" />
          </a>
          <a href="mailto:joel.hagan.8@gmail.com">
            <FaEnvelope className="text-white text-[31px] mx-5 cursor-pointer hover:text-[#ffa200] transform hover:scale-110" />
          </a>
        </div>

        {/* transition */}
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
