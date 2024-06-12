import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaBootstrap,
  FaReact,
  FaGitAlt,
} from 'react-icons/fa';
import { SiJavascript, SiWebpack, SiTailwindcss, SiRedux } from 'react-icons/si';
import materialUi from '../assets/images/material-logo.png';

const skills = [
  {
    id: 1,
    skill: 'HTML5',
    colorClass: 'html',
    skillIcon: <FaHtml5 />,
    isImg: false,
  },

  {
    id: 2,
    skill: 'CSS3',
    colorClass: 'css',
    skillIcon: <FaCss3 />,
  },
  {
    id: 3,
    skill: 'Javascript',
    colorClass: 'javascript',
    skillIcon: <SiJavascript />,
    isImg: false,

  },
  {
    id: 4,
    skill: 'SASS',
    colorClass: 'sass',
    skillIcon: <FaSass />,
    isImg: false,

  },
  {
    id: 5,
    skill: 'Bootstrap',
    colorClass: 'bootstrap',
    skillIcon: <FaBootstrap />,
    isImg: false,

  },
  {
    id: 6,
    skill: 'Tailwind.css',
    colorClass: 'tailwind',
    skillIcon: <SiTailwindcss />,
    isImg: false,

  },
  {
    id: 7,
    skill: 'Webpack',
    colorClass: 'webpack',
    skillIcon: <SiWebpack />,
    isImg: false,

  },
  {
    id: 8,
    skill: 'React.js',
    colorClass: 'react',
    skillIcon: <FaReact />,
    isImg: false,

  },
  {
    id: 9,
    skill: 'Redux-Toolkit',
    colorClass: 'redux',
    skillIcon: <SiRedux />,
    isImg: false,

  },
  {
    id: 10,
    skill: 'Git',
    colorClass: 'git',
    skillIcon: <FaGitAlt />,
    isImg: false,

  },
  {
    id: 11,
    skill: 'Material UI',
    // colorClass: 'git',
    // skillIcon: <FaGitAlt />,
    isImg: true,
    skillIconImg: materialUi,
  },
];

export default skills;
