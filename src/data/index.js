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
  day11,
  day12,
  day13,
  day14,
  day15,
  day16,
  day17,
  day18,
  day19,
} from "../asset";
import {
  bgGenerator,
  hotelBookingApp1,
  hotelBookingApp2,
  bookmark1,
  bookmark2,
  bookmark3,
  bookmark4,
} from "../asset";
import { rps } from "../asset";
import { pomodoro1, pomodoro2 } from "../asset";
import {
  passthesalt1,
  passthesalt2,
  passthesalt3,
  passthesalt4,
  passthesalt5,
} from "../asset";

import { bukopy1, bukopy2, bukopy3, bukopy4, bukopy5, bukopy6 } from "../asset";

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
import { SiPostgresql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiBabel } from "react-icons/si";
import { SiWebpack } from "react-icons/si";

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
    images: [day11, day12, day13, day14, day15, day16, day17, day18, day19],
    live_url: "https://day1-habit-tracker.onrender.com",
    github_link: "https://github.com/kimicasamina/day1",
  },
  // {
  //   id: 4,
  //   name: "RSS Reader",
  //   desc: "A Simple RSS Reader is a lightweight, user-friendly application designed to help users stay updated with their favorite news sources, blogs, and websites.",
  //   images: [rssSlide1, rssSlide2, rssSlide3, rssSlide4, rssSlide5],
  //   live_url: "https://rssreader-3zjk.onrender.com/",
  //   github_link: "https://github.com/kimicasamina/rss-reader",
  // },
  {
    id: 5,
    name: "Passthesalt",
    desc: "Password manager application designed to securely store and retrieve user login credentials. The system ensures that passwords are encrypted before being saved to the database and can only be decrypted when needed by the client. Built using React.js with Vite and Tailwind CSS for the frontend, and Node.js, Sequelize, and PostgreSQL for the backend.",
    images: [
      passthesalt1,
      passthesalt2,
      passthesalt3,
      passthesalt4,
      passthesalt5,
    ],
    live_url: "https://passthesalt-frontend.onrender.com/",
    github_url: "https://github.com/kimicasamina/passthesalt-password-manager",
  },
  {
    id: 6,
    name: "Bukopy Blog",
    desc: "A simple blogging platform using Django. The platform allows both logged-in users and guests to view and browse blog posts. It also supports basic CRUD (Create, Read, Update, Delete) operations for managing blog posts.",
    images: [bukopy1, bukopy2, bukopy3, bukopy4, bukopy5, bukopy6],
    live_url: "https://bukopy-blogsite.onrender.com/",
    github_link: "https://github.com/kimicasamina/bukopy-django-blogsite",
  },

  // {
  //   id: 7,
  //   name: "Hotel Booking App",
  //   desc: "Hotel booking app management with login and register feature",
  //   images: [hotelBookingApp1, hotelBookingApp2],
  //   live_url: "https://hotel-booking-app-fullstack-mern.onrender.com/",
  //   github_link: "https://github.com/kimicasamina/hotel-booking-app",
  // },
  {
    id: 7,
    name: "Bg Generator",
    desc: "A simple background generator app build with JavaScript, CSS, and HTML",
    images: [bgGenerator, bgGenerator],
    live_url: "https://kimicasamina.github.io/css-background-generator/",
    github_link: "https://kimicasamina.github.io/css-background-generator/",
  },
  {
    id: 8,
    name: "Rock, Paper, Scissor",
    desc: "A simple rock paper scissor game built using javascript, css, and html",
    images: [rps, rps],
    live_url: "https://kimicasamina.github.io/rock-paper-scissors/",
    github_url: "https://github.com/kimicasamina/rock-paper-scissors",
  },
  {
    id: 9,
    name: "Pomodoro",
    desc: "A simple pomodoro timer that has a 25 minutes interval. For every pomodoro you finished, you'll gain a tomato. The user can pause and reset the timer.",
    images: [pomodoro1, pomodoro2],
    live_url: "https://kimicasamina.github.io/pomodoro-timer/",
    github_url: "https://github.com/kimicasamina/pomodoro-timer",
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
  {
    id: 21,
    label: "Jest",
    icon: SiJest,
  },
  {
    id: 22,
    label: "Postgresql",
    icon: SiPostgresql,
  },
  {
    id: 23,
    label: "Sequelize",
    icon: SiSequelize,
  },
  {
    id: 24,
    label: "Babel",
    icon: SiBabel,
  },
  {
    id: 25,
    label: "Webpack",
    icon: SiWebpack,
  },
  // {
  //   id: 15,
  //   label: "GraphQL",
  //   icon: SiGraphql,
  // },
  // {
  //   id: 16,
  //   label: "NextJS",
  //   icon: SiNextdotjs,
  // },
];
