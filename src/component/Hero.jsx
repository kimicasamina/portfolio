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
                {" "}
                I’m a full-stack developer with expertise in building backend
                APIs using Node.js, Express.js, and MongoDB, as well as
                relational databases like PostgreSQL and MySQL, utilizing
                Sequelize ORM for scalability and maintainability. I am
                dedicated to writing clean, secure, efficient, and scalable code
                to build robust backend systems.
              </p>

              <p className="text-sm">
                On the front-end, I create dynamic, responsive UIs with React.js
                and Tailwind CSS, supported by a solid foundation in HTML,
                JavaScript, CSS, and Sass.
              </p>

              <p className="text-sm">
                In addition to my core technologies, I’ve explored backend
                frameworks like PHP and Laravel and enjoyed using tools such as
                TypeScript and Jest for testing. I’m also experienced in
                deploying applications on Render and optimizing projects for
                production using Webpack and Babel.
              </p>

              <p className="text-sm">
                My personal projects have been key to expanding my skill set.
                Providing opportunities to experiment with new technologies, and
                refine my development process.
              </p>
              <p className="text-sm">
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
              </p>
            </div>
          </div>

          {/* <Skills /> */}
        </div>
        {/* <div className="waves -z-10 opacity-50 min-h-[50px] rotate-145"></div> */}
      </motion.div>
    </motion.section>
  );
}
