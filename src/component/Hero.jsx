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
      <motion.div variants={hiddenToVisible} className="w-full relative h-full">
        <div className="flex flex-col items-center justify-center gap-y-4 gap-x-4 z-5  overflow-x-hidden h-full">
          {/* <div className="flex-1 flex flex-col">
          </div> */}
          <h1
            className="mb-4 font-bold text-xl sm:text-5xl text-yellow tracking-wide flex flex-col sm:absolute top-4 left-0 mt-[90px]"
            ref={glitch.ref}
          >
            <span className="sm:text-6xl">+---#%-------*---0--+</span>
            <span className="sm:text-6xl">| Kimberly Casamina |</span>
            <span className="sm:text-6xl">+-------$-----------+</span>
          </h1>
          <div className="h-auto mt-[100px] flex flex-row gap-x-4 ">
            <p className="text-green-2 text-sm sm:text-base font-semibold text-cyan-400 ">
              kimi@pop-os ~ 💃
            </p>
            <p className="max-w-[60%] text-green-200 leading-snug   text-sm sm:text-base">
              I'm a self-taught developer with a passion for solving problems
              through programming and software development. Specializing in the
              Mernstack (Mongodb, Expressjs, Reactjs, Nodejs). I have been
              actively expanding my skills through online courses, personal
              projects, and hands-on experience.
            </p>
          </div>

          {/* <Skills /> */}
        </div>
        {/* <div className="waves -z-10 opacity-50 min-h-[50px] rotate-145"></div> */}
      </motion.div>
    </motion.section>
  );
}
