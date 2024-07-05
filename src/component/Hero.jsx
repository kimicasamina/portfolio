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
      <motion.div variants={hiddenToVisible} className="w-full sm:w-1/2">
        <div className="flex flex-col gap-y-2">
          <h1 className="mb-4 font-bold">Kimberly Casamina</h1>
          <p className="max-w-[450px]">
            {/* illum ea quod aliquid nobis minima magnam, nemo consectetur quisquam
            odit. */}
          </p>
          <Skills />
        </div>
      </motion.div>
    </motion.section>
  );
}
