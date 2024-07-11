import React from "react";
import { skills } from "../data";
import emailjs from "@emailjs/browser";

export default function Skills() {
  return (
    <section className="w-full py-4 flex-1 flex flex-col">
      <div className="w-full flex flex-wrap gap-x-4 gap-y-4">
        {skills.map((skill) => (
          <li
            className="bg-slate-900 rounded-md flex justify-center items-center px-2 py-2 shadow-lg "
            key={skill.id}
          >
            <p className="text-slate-200 ">{skill.label}</p>
          </li>
        ))}
      </div>
    </section>
  );
}
