import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Joel",
          from_email: form.email,
          to_email: "joel.hagan.8@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for reaching out. I will get back to you as soon as possible regarding your inquiry."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`flex xl:flex-row flex-col-reverse gap-10 mb-16 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#291836] p-8 rounded-2xl h-[760px] relative"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Icons */}
        <div className="mt-3 flex ml-auto items-center">
          <a
            href="https://github.com/Jagan-creator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-[20px] mx-2 cursor-pointer hover:text-[#726080] transform hover:scale-110" />
          </a>
          <a
            href="https://resume.creddle.io/resume/5wh3kh8ktcc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoNewspaperSharp className="text-white text-[20px] mx-2 cursor-pointer hover:text-[#726080] transform hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/joel-hagan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-[20px] mx-2 cursor-pointer hover:text-[#726080] transform hover:scale-110" />
          </a>
          <a href="mailto:joel.hagan.8@gmail.com">
            <FaEnvelope className="text-white text-[20px] mx-2 cursor-pointer hover:text-[#726080] transform hover:scale-110" />
          </a>
        </div>

        {/* Existing form code */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-[#726080] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-[#726080] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-[#726080] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#726080] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative"
      >
        <EarthCanvas />
      </motion.div>

      {/* Up Arrow */}
      <motion.div
        onClick={scrollToTop}
        className="absolute bottom-4 left-1/2 transform hover:scale-105 -translate-x-1/2 bg-[#291836] p-4 rounded-full cursor-pointer"
      >
        <FaArrowUp
          size={24}
          color="#fff"
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
