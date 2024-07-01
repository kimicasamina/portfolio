import React from "react";
import { projects } from "../data";
import { Link } from "react-router-dom";

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
          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-y-8 sm:gap-x-10 "
            key={item.id}
          >
            <div
              className={`${i % 2 === 0 ? "sm:order-2" : "sm:order-1"} flex flex-col gap-y-2 w-full sm:max-w-[380px] order-1 relative`}
            >
              <h3 className="font-semibold border-slate-900">{item.name}</h3>
              <p className="">{item.desc}</p>

              <a
                href={item.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 font-semibold hover:text-slate-200 link text-xl"
              >
                Github
                {/* <span className="link">Github</span> */}
              </a>
            </div>
            <a
              href={item.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 ${i % 2 === 0 ? "sm:order-1" : "sm:order-2"} hover:shadow-2xl`}
            >
              <img
                src={item.image}
                alt=""
                className="w-full object-contain rounded-lg border border-slate-800 shadow-xl "
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
