import './AboutMe.scss';
import { SocialMedia } from '../index';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const AboutMe = () => {

  let myExperience = new Date().getFullYear() - 2021;

  return (
    <motion.div
      initial={{ opacity: 0, y: '-200px' }}
      whileInView={{ opacity: 1, y: '0' }}
      transition={{ duration: 1 }}
      className='about-me'
    >
      <div className='my-photo'></div>
      <div className="name">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("i'm mohamed abdalaziz")
            .start()
          }}
        />
      </div>
      <div className="job-title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(3100)
            .typeString("front-end web developer")
            .start()
          }}
        />
      </div>
      <SocialMedia />
      <div className="my-info">
        <p>
          I am a front-end web developer from egypt with {myExperience} years of experience.
          I have a Bachelor's degree in Computer Science (IT) from Kafr El-Sheikh University, Egypt. 
        </p>
      </div>
    </motion.div>
  )
}

export default AboutMe