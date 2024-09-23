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
        <div className="flex flex-col justify-center gap-y-4 gap-x-4 z-5  overflow-x-hidden h-full">
          {/* <div className="flex-1 flex flex-col">
          </div> */}
          <h1
            className="mb-4 font-bold text-xl sm:text-5xl text-yellow tracking-wide flex flex-col sm:absolute top-4 left-0 mt-10"
            ref={glitch.ref}
          >
            <span className="">+-------------------+</span>
            <span className="">| Kimberly Casamina |</span>
            <span className="">+-------------------+</span>
          </h1>
          <div className="h-auto flex flex-row gap-x-4 ">
            <p className="text-green-2 text-sm sm:text-base font-semibold">
              kimi@pop-os ~ 💃
            </p>
            <p className="max-w-[60%] text-green-200 leading-snug  pt-1 text-sm sm:text-base">
              I'm a self-taught developer passionate about turning ideas into
              reality through code. My journey into coding began out of
              curiosity, and it quickly evolved into a fulfilling career. I
              specialize in JavaScript, React, Nodejs, Express, Mongodb and
              Tailwindcss. I love exploring new technologies and honing my
              skills through personal projects.
            </p>
          </div>

          <Skills />
        </div>
        {/* <div className="waves -z-10 opacity-50 min-h-[50px] rotate-145"></div> */}
      </motion.div>
    </motion.section>
  );
}
