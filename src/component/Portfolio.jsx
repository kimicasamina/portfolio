import React from "react";
import { projects } from "../data";
import { github, githubdark, rss_reader } from "../asset/index";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section
      data-section
      id="portfolio"
      className="w-full h-full flex-1 flex flex-col sectionWrapper"
    >
      <h1 className="mb-12 sm:mb-10">Portfolio</h1>
      <div className="w-full flex flex-col gap-y-20 sm:gap-y-36 ">
        {projects.map((item, i) => (
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-y-8 sm:gap-x-10 "
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 0.5 },
            }}
          >
            <div
              className={`${i % 2 === 0 ? "sm:order-2" : "sm:order-1"} flex flex-col gap-y-2 w-full sm:max-w-[380px] order-1 `}
            >
              <h3 className="font-semibold border-slate-900">{item.name}</h3>
              <p className="">{item.desc}</p>

              <div className="flex flex-wrap gap-x-0 group">
                {/* <img src={github} alt="" className="w-10 h-8 " /> */}
                <img src={githubdark} alt="" className="w-10 h-8 flex " />
                <span className="relative flex flex-wrap items-center">
                  <a
                    href={item.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 font-semibold hover:text-slate-400 text-xl link duration-300"
                  >
                    Source Code
                    {/* <span className="link">Github</span> */}
                  </a>
                </span>
              </div>
            </div>
            <a
              href={item.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 ${i % 2 === 0 ? "sm:order-1" : "sm:order-2"} shadow-xl hover:shadow-2xl hover:scale-105 hover:ease-in-out hover:duration-150 `}
            >
              <img
                src={item.image}
                alt=""
                className="w-full object-contain rounded-lg border border-slate-800 "
              />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
