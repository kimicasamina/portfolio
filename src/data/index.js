import {
  dashboard,
  project,
  timer,
  notedashboard,
  mystackaddnote,
  rss_reader,
} from "../asset";
import {
  rssSlide1,
  rssSlide2,
  rssSlide3,
  rssSlide4,
  rssSlide5,
} from "../asset";
import {
  gtwAmbience,
  gtwDashboard,
  gtwTimer,
  gtwProject,
  gtwLogin,
} from "../asset";
import {
  day1_1,
  day1_2,
  day1_3,
  day1_4,
  day1_5,
  day1_6,
  day1_7,
  day1_8,
  day1_9,
} from "../asset";

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
import { SiNodedotjs } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";

import { SiMysql } from "react-icons/si";

export const projects = [
  {
    id: 1,
    name: "Get To Work",
    desc: "A web-based project management and productivity tool that tracks progress in a visual and rewarding way.",
    images: [gtwDashboard, gtwProject, gtwTimer, gtwAmbience, gtwLogin],
    live_url: "https://gettowork.onrender.com",
    github_link:
      "https://github.com/kimicasamina/Get-To-Work-Mongodb-Express-React-Nodejs",
  },
  {
    id: 2,
    name: "Mystackoverflowhiddenbydefault",
    desc: "A note-taking application with syntax highlighting support.",
    images: [notedashboard, mystackaddnote],
    live_url: "https://mystackoverflowhiddenbydefault.onrender.com/",
    github_link: "https://github.com/kimicasamina/fullstack-mern-note-app",
  },
  {
    id: 3,
    name: "day1",
    desc: "The Habit Tracker application is designed to help users build and maintain positive habits. Users can create, edit, and delete habits, track their progress, and visualize their performance over time.",
    images: [
      day1_1,
      day1_2,
      day1_3,
      day1_4,
      day1_5,
      day1_6,
      day1_7,
      day1_8,
      day1_9,
    ],
    live_url: "https://day1-habit-tracker.onrender.com",
    github_link: "https://github.com/kimicasamina/day1",
  },
  {
    id: 4,
    name: "RSS Reader",
    desc: "A Simple RSS Reader is a lightweight, user-friendly application designed to help users stay updated with their favorite news sources, blogs, and websites.",
    images: [rssSlide1, rssSlide2, rssSlide3, rssSlide4, rssSlide5],
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
    icon: SiNodedotjs,
  },
  {
    id: 12,
    label: "NextJS",
    icon: SiNextdotjs,
  },
  {
    id: 13,
    label: "MySql",
    icon: SiMysql,
  },

  {
    id: 14,
    label: "Php",
    icon: SiPhp,
  },
  {
    id: 15,
    label: "Python",
    icon: SiPython,
  },
  {
    id: 16,
    label: "Django",
    icon: SiDjango,
  },
  {
    id: 17,
    label: "Laravel",
    icon: SiLaravel,
  },
  {
    id: 18,
    label: "Npm",
    icon: SiNpm,
  },
  {
    id: 19,
    label: "Vite",
    icon: SiVite,
  },
  {
    id: 20,
    label: "TypeScript",
    icon: SiTypescript,
  },
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
