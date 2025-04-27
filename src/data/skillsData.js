import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaBootstrap,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiWebpack,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

import materialUi from "../assets/images/material-logo.png";
import vue from "../assets/images/vue-logo.webp";
import nextjs from "../assets/images/nextjs-logo.png";

const skills = [
  {
    id: 9,
    skill: "React.js",
    colorClass: "react",
    skillIcon: <FaReact />,
    isImg: false,
  },
  {
    id: 10,
    skill: "Vue.js",
    // colorClass: "react",
    // skillIcon: <FaReact />,
    isImg: true,
    skillIconImg: vue,
  },
  {
    id: 10,
    skill: "Next.js",
    // colorClass: "react",
    // skillIcon: <FaReact />,
    isImg: true,
    skillIconImg: nextjs,
  },
  {
    id: 3,
    skill: "Javascript",
    colorClass: "javascript",
    skillIcon: <SiJavascript />,
    isImg: false,
  },
  {
    id: 4,
    skill: "Typescript",
    colorClass: "typescript",
    skillIcon: <SiTypescript />,
    isImg: false,
  },
  {
    id: 11,
    skill: "Redux-Toolkit",
    colorClass: "redux",
    skillIcon: <SiRedux />,
    isImg: false,
  },
  {
    id: 12,
    skill: "Vuex",
    // colorClass: "react",
    // skillIcon: <FaReact />,
    isImg: true,
    skillIconImg: vue,
  },
  {
    id: 1,
    skill: "HTML5",
    colorClass: "html",
    skillIcon: <FaHtml5 />,
    isImg: false,
  },

  {
    id: 2,
    skill: "CSS3",
    colorClass: "css",
    skillIcon: <FaCss3 />,
  },

  {
    id: 5,
    skill: "SASS",
    colorClass: "sass",
    skillIcon: <FaSass />,
    isImg: false,
  },
  {
    id: 6,
    skill: "Bootstrap",
    colorClass: "bootstrap",
    skillIcon: <FaBootstrap />,
    isImg: false,
  },
  {
    id: 7,
    skill: "Tailwind.css",
    colorClass: "tailwind",
    skillIcon: <SiTailwindcss />,
    isImg: false,
  },
  {
    id: 14,
    skill: "Material UI",
    // colorClass: 'git',
    // skillIcon: <FaGitAlt />,
    isImg: true,
    skillIconImg: materialUi,
  },
  {
    id: 8,
    skill: "Webpack",
    colorClass: "webpack",
    skillIcon: <SiWebpack />,
    isImg: false,
  },
  {
    id: 13,
    skill: "Git",
    colorClass: "git",
    skillIcon: <FaGitAlt />,
    isImg: false,
  },
];

export default skills;
