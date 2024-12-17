import React from "react";
import { projects } from "../data";
import { github, githubdark, rss_reader } from "../asset/index";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Project from "./Project";

export default function Portfolio() {
  return (
    <section
      data-section
      id="portfolio"
      className="w-full h-full flex flex-col sectionWrapper"
    >
      <h1 className="mb-12 sm:mb-14 pb-14 text-green-200 text-4xl">
        {">"} PORTFOLIO
      </h1>
      {projects.map((project, i) => (
        <Project project={project} key={project.id} />
      ))}
    </section>
  );
}
