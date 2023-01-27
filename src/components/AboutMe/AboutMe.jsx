import './AboutMe.scss';
import { SocialMedia } from '../index';
import { motion } from 'framer-motion';


const AboutMe = ({ animation }) => {

  let myExperience = new Date().getFullYear() - 2021;

  return (
    <motion.div className='about-me' animate={animation}>
      <div className='my-photo'></div>
      <h2 className='name'>
        mohamed abdalaziz
      </h2>
      <span className='job-title'>
        web developer
      </span>
      <SocialMedia />
      <div className="my-info">
        <p>
          I am a web developer from egypt with {myExperience} years of experience.<br />
          I have a Bachelor's degree in Computer Science (IT) from Kafr El-Sheikh University, Egypt. 
        </p>
      </div>
    </motion.div>
  )
}

export default AboutMe