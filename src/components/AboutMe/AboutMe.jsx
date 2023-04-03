import './AboutMe.scss';
import { SocialMedia } from '../index';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { AnimateContext } from '../../Contexts/Context';
import { useContext } from 'react';
import cv from '../../assets/CV.pdf';
import { FaDownload } from 'react-icons/fa'

const AboutMe = () => {

  let myExperience = new Date().getFullYear() - 2021;
  const { initial, whileInView, transition } = useContext(AnimateContext);

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
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
            .typeString("front end web developer")
            .start()
          }}
        />
      </div>
      <SocialMedia />
      <div className="my-info">
        <p>
          I am a Front End Developer from Egypt with over {myExperience} years of experience. 
          <br className='d-md-block d-none' />
          I have a B.S. in computer science (IT) from Kafr El-Sheikh University, Egypt.
        </p>
      </div>
      <div className="my-cv">
        <a href={cv} download>Download CV <FaDownload /></a>
      </div>
    </motion.div>
  )
}

export default AboutMe