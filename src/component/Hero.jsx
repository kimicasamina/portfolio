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
                I am a Full-Stack Web Developer skilled in building secure and
                scalable backend APIs and servers. I have experience with
                Node.js and Express.js for server-side development, as well as
                Django for Python-based applications. I specialize in creating
                efficient and secure APIs, ensuring data integrity and safe
                authentication.
              </p>

              <p className="text-sm">
                On the front end, I am proficient in React.js and TailwindCSS,
                building dynamic and responsive user interfaces that integrate
                seamlessly with backend frameworks. Additionally, I am skilled
                in creating static web pages using HTML, EJS, CSS, and Sass,
                ensuring my applications are both functional and visually
                appealing.
              </p>

              <p className="text-sm">
                I have solid experience working with both SQL and NoSQL
                databases, including PostgreSQL, MySQL, and MongoDB, and I use
                Sequelize ORM to manage relational database efficiently. I am
                also well-versed in Git for version control and build tools like
                Webpack and Babel.
              </p>

              <p className="text-sm">
                I am committed to writing clean, maintainable code and following
                best practices to ensure optimal performance and long-term
                scalability.
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
