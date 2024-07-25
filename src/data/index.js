import { dashboard, project, timer, notedashboard, rss_reader } from "../asset";

// icons
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

export const projects = [
  {
    id: 1,
    name: "Get To Work",
    desc: "A web-based project management tool that tracks progress in a visual and rewarding way.",
    image: dashboard,
    live_url: "https://gettowork.onrender.com",
    github_link:
      "https://github.com/kimicasamina/Get-To-Work-Mongodb-Express-React-Nodejs",
  },
  {
    id: 2,
    name: "Mystackoverflowhiddenbydefault",
    desc: "A note-taking application with syntax highlighting support.",
    image: notedashboard,
    live_url: "https://mystackoverflowhiddenbydefault.onrender.com/",
    github_link: "https://github.com/kimicasamina/fullstack-mern-note-app",
  },
  {
    id: 3,
    name: "RSS Reader",
    desc: "A simple RSS reader written in React, Tailwindcss, MongoDB, NodeJs and Express",
    image: rss_reader,
    live_url: "https://rssreader-3zjk.onrender.com/",
    github_link: "https://github.com/kimicasamina/rss-reader",
  },
];

export const skills = [
  {
    id: 1,
    label: "HTML",
    icon: SiHtml5,
  },
  {
    id: 2,
    label: "CSS",
    icon: SiCss3,
  },
  {
    id: 3,
    label: "JavaScript",
    icon: SiJavascript,
  },
  {
    id: 4,
    label: "Sass",
    icon: SiSass,
  },
  {
    id: 5,
    label: "Git",
    icon: SiGit,
  },
  {
    id: 6,
    label: "Linux",
    icon: SiLinux,
  },
  {
    id: 6,
    label: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    id: 7,
    label: "React",
    icon: SiReact,
  },
  {
    id: 8,
    label: "Express",
    icon: SiExpress,
  },
  {
    id: 9,
    label: "MongoDB",
    icon: SiMongodb,
  },
  {
    id: 10,
    label: "Mongoose",
    icon: SiMongoose,
  },
  {
    id: 11,
    label: "NodeJS",
    icon: SiHtml5,
  },
  {
    id: 12,
    label: "Npm",
    icon: SiNpm,
  },
  {
    id: 13,
    label: "Vite",
    icon: SiVite,
  },
  // {
  //   id: 14,
  //   label: "TypeScript",
  //   icon: SiTypescript,
  // },
  // {
  //   id: 15,
  //   label: "GraphQL",
  //   icon: SiGraphql,
  // },
  // {
  //   id: 16,
  //   label: "Jest",
  //   icon: SiJest,
  // },
  // {
  //   id: 16,
  //   label: "NextJS",
  //   icon: SiNextdotjs,
  // },
];
