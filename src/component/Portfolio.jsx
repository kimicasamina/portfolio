import React from "react";
import { projects } from "../data";

export default function Portfolio() {
  return (
    <div className="w-full flex flex-col gap-y-20">
      <h2 className="">Portfolio</h2>
      <div className="w-full flex flex-col gap-y-20 sm:gap-y-44 ">
        {projects.map((item, i) => (
          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-y-8 sm:gap-x-10 "
            key={item.id}
          >
            <div
              className={`${i % 2 === 0 ? "sm:order-2" : "sm:order-1"} flex flex-col gap-y-2 w-full max-w-[380px] order-1`}
            >
              <h3 className="font-semibold">{item.name}</h3>
              <p className="">{item.desc}</p>

              <a
                href={item.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 font-semibold"
              >
                Github
              </a>
            </div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 ${i % 2 === 0 ? "sm:order-1" : "sm:order-2"}`}
            >
              <img
                src={item.image}
                alt=""
                className="w-full object-contain rounded-lg border border-slate-800 shadow-lg"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
