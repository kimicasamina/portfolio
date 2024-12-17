import React from "react";
import { skills } from "../data";
import emailjs from "@emailjs/browser";

// import { SiHtml5 } from "react-icons/si";
// import { SiPostgresql } from "react-icons/si";
// import { SiHtml5 } from "react-icons/si";
// import { SiCss3 } from "react-icons/si";
// import { SiJavascript } from "react-icons/si";
// import { SiSass } from "react-icons/si";
export default function Skills() {
  return (
    <section
      data-section
      id="skills"
      className="w-full h-screen flex justify-center flex-col sectionWrapper"
    >
      <h1 className="mb-6 sm:mb-8 pb-8 text-green-200 text-4xl">
        {">"} SKILLS
      </h1>
      {/* <div className="w-full max-w-[50%] flex flex-wrap gap-x-4 gap-y-4">
        <p>Frontend:</p>
        <div className="flex flex-wrap">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiSass />
        </div>
      </div> */}
      <div className="w-full max-w-[50%] flex flex-wrap gap-x-4 gap-y-4">
        {skills.map((skill, i) => (
          <li
            className="bg-green-100 min-h-[4]  rounded-md flex justify-center items-center gap-x-2 px-2 py-2 shadow-lg "
            key={i}
          >
            {/* {skill.icon} */}
            <div className="text-green-300">
              {React.createElement(skill.icon)}
            </div>
            <p className="text-green-300">{skill.label}</p>
          </li>
        ))}
      </div>
    </section>
  );
}
