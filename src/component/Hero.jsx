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
                I’m a self-taught developer with a passion for solving
                real-world problems through programming and software
                development. Over the years, I’ve built a strong foundation in
                full-stack development, with a primary focus on the MERN stack
                (MongoDB, Express.js, React.js, Node.js). Along the way, I’ve
                expanded my skill set by diving into other powerful back-end
                frameworks such as Django and Laravel as well as working with
                relational databases such as MySQL and PostgreSQL. I enjoy the
                challenge of building both the front-end and back-end of
                applications, integrating them seamlessly, whether it’s building
                user interfaces, creating data models, developing APIs, or
                deploying to the server.
              </p>

              <p className="text-sm">
                My journey as a developer is driven by a deep curiosity and a
                desire to find my place in the world, where I can grow, evolve
                and contribute in a meaningful way. I’m always looking to
                improve my skills through personal projects and hands-on
                experience. I enjoy experimenting with new tools, exploring best
                practices, and methodologies to refine my development process.
              </p>

              <p className="text-sm">
                Beyond just coding, I am passionate about solving complex
                problems and transforming ideas into practical solutions.
                Whether it’s building responsive front-end interfaces or
                architecting back-end systems, I approach each project with a
                focus on quality and long-term growth. My ultimate goal is to
                contribute meaningfully to a collaborative and dynamic
                development team, where I can continue to grow both
                professionally and personally, while tackling challenging and
                rewarding projects.
              </p>

              <p className="text-sm">
                In my free time, you’ll often find me enjoying the sun, whether
                it’s soaking up a peaceful afternoon outside or relishing the
                gentle, warm breeze and golden glow of a sunset.
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
