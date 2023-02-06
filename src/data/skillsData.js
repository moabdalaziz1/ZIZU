import { FaHtml5, FaCss3, FaSass, FaBootstrap, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiJavascript , SiWebpack} from 'react-icons/si';


const skills = [
  {
    id: 1,
    skill: 'HTML5',
    colorClass: 'html',
    skillIcon: <FaHtml5 />,
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
  },
  {
    id: 4,
    skill: 'SASS',
    colorClass: 'sass',
    skillIcon: <FaSass />,
  },
  {
    id: 5,
    skill: 'Bootstrap',
    colorClass: 'bootstrap',
    skillIcon: <FaBootstrap />,
  },
  {
    id: 6,
    skill: 'Webpack',
    colorClass: 'webpack',
    skillIcon: <SiWebpack />,
  },
  {
    id: 7,
    skill: 'React.js',
    colorClass: 'react',
    skillIcon: <FaReact />,
  },
  {
    id: 8,
    skill: 'Git',
    colorClass: 'git',
    skillIcon: <FaGitAlt />,
  },
];

export default skills
