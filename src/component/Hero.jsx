import React from "react";
import { motion } from "framer-motion";
import { hiddenToVisible } from "./utils/motion";
import Skills from "./Skills";

export default function Hero() {
  return (
    <motion.section
      data-section
      id="hero"
      className="w-full h-screen flex flex-col justify-center sectionWrapper "
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={hiddenToVisible} className="w-full relative">
        <div className="flex flex-col gap-y-4 gap-x-4 z-5 relative ">
          <div className="">
            <h1 className="mb-4 font-bold text-5xl text-slate-100 tracking-wide">
              Kimberly Casamina
            </h1>
            <p className="max-w-[450px] text-xl">
              Passionate about learning and development with a desire to apply
              skills on a larger development team.
            </p>
          </div>

          <Skills />
        </div>
        {/* <div className="waves -z-10 opacity-50 min-h-[50px] rotate-145"></div> */}
      </motion.div>
    </motion.section>
  );
}
