import React from "react";
import { dashboard, githubdark } from "../asset";
import Carousel from "./Carousel";

function Project({ project }) {
  return (
    <>
      <div className="flex flex-col gap-y-12 w-full max-w-[90%] mx-auto mb-60">
        <Carousel
          images={project.images}
          github_link={project.github_link}
          live_url={project.live_url}
        />

        <div className="w-full flex flex-col items-center text-center gap-y-6">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-4xl mb-4 text-green-200">
              {project.name}
            </h2>
            <p
              className="w-full sm:max-w-[70%] leading-snug  text-base font-reddit text-green-200"
              style={{ textWrap: "pretty" }}
            >
              {project.desc}
            </p>
          </div>

          <div className="flex-1 flex items-center gap-x-4">
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold  text-xl link duration-300 px-4 py-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer flex items-center gap-x-2 bg-green-200 text-black hover:bg-green-100"
            >
              <img src={githubdark} alt="" />
              <span>Source Code</span>
            </a>
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className=" font-semibold  text-xl link duration-300 px-4 py-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer flex items-center gap-x-2 bg-green-200 text-black hover:bg-green-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
              <span>Live Url</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
