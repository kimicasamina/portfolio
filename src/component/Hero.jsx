import React from "react";
import { motion } from "framer-motion";
import { hiddenToVisible } from "./utils/motion";
import Skills from "./Skills";
import { useGlitch } from "react-powerglitch";

export default function Hero() {
  const glitch = useGlitch();
  return (
    <motion.section
      data-section
      id="hero"
      className="w-full h-screen flex flex-col justify-center sectionWrapper "
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={hiddenToVisible}
        className="w-full relative min-h-full"
      >
        <div className="flex flex-col items-center justify-center gap-y-4 gap-x-4 z-5  overflow-x-hidden h-full">
          <h1
            className="mb-4 font-bold text-xl sm:text-5xl text-yellow tracking-wide flex flex-col sm:absolute top-4 left-0 mt-[20px]"
            ref={glitch.ref}
          >
            <span className="sm:text-6xl">+---#%-------*---0--+</span>
            <span className="sm:text-6xl">| Kimberly Casamina |</span>
            <span className="sm:text-6xl">+-------$-----------+</span>
          </h1>
          <div className="h-auto mt-[200px] flex flex-row gap-x-4 ">
            <p className="text-green-2 text-sm sm:text-base font-semibold text-cyan-400 ">
              kimi@pop-os ~ 💃
            </p>
            <div className="max-w-[70%] text-green-200 leading-snug   text-sm sm:text-base flex flex-col gap-y-8">
              <p className="text-sm">
                I’m a Full-Stack Web Developer with a focus on building secure,
                scalable web applications. I have experience working on both the
                front-end and back-end, creating RESTful APIs and dynamic user
                interfaces.
              </p>

              <p className="text-sm">
                For back-end development, I use Node.js and Express.js to build
                scalable applications, and Django for Python-based projects. I
                prioritize security and maintainability, implementing best
                practices such as authentication, encryption, and input
                validation.
              </p>

              <p className="text-sm">
                On the front-end, I use React.js and TailwindCSS to create
                responsive, user-friendly interfaces. I also have a solid
                foundation in HTML, CSS, and Sass for building visually
                appealing static websites.
              </p>

              <p className="text-sm">
                I’m skilled with both SQL (PostgreSQL, MySQL) and NoSQL
                (MongoDB) databases, using Sequelize ORM for managing relational
                data. I use Git for version control and tools like Webpack and
                Babel to optimize performance.
              </p>

              <p className="text-sm">
                I’m passionate about writing clean, maintainable code and
                staying up-to-date with the latest web development trends and
                tools.
              </p>

              {/* <p className="text-sm">
                Feel free to check out some of my work on{" "}
                <span className="text-sm text-yellow">
                  <a
                    // activeClass="active"
                    target="_blank"
                    href="https://github.com/kimicasamina"
                  >
                    Github
                  </a>
                </span>
              </p> */}
            </div>
          </div>

          {/* <Skills /> */}
        </div>
        {/* <div className="waves -z-10 opacity-50 min-h-[50px] rotate-145"></div> */}
      </motion.div>
    </motion.section>
  );
}
