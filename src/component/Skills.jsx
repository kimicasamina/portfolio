import React from "react";
import { skills } from "../data";
import emailjs from "@emailjs/browser";

import { SiHtml5 } from "react-icons/si";

export default function Skills() {
  return (
    <section className="w-full pt-8 flex-1 flex sm:w-2/3">
      <div className="w-full flex flex-wrap gap-x-4 gap-y-4">
        {skills.map((skill, i) => (
          <li
            className="bg-green-100  rounded-md flex justify-center items-center gap-x-2 px-2 py-2 shadow-lg "
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
