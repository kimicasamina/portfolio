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
        className="w-full relative min-h-full flex flex-col justify-center"
      >
        <div className="w-full h-[500px] space-y-8 leading-snug font-base">
          <h1 className="text-3xl ">
            Hello, my name is{" "}
            <span className="font-bold text-4xl text-green-200">Kim.</span>
          </h1>
          <div
            className="mt-4 w-full max-w-[60%] text-xl text-neutral-200"
            style={{ textWrap: "pretty" }}
          >
            I'm a full-stack developer based in Manila, specializing in building
            scalable web applications with modern tools and technologies.
            Passionate about writing clean code and earning metaphorical green
            checkmarks.
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
