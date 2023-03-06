import './AboutMe.scss';
import { SocialMedia } from '../index';
import Typewriter from 'typewriter-effect';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutMe = () => {

  let myExperience = new Date().getFullYear() - 2021;

  const elementVariant = {
    visible: {scale: 1, transition: {duration: 2, type: 'spring', bounce: 0.2}},
    hidden: {scale: 0, transition: {duration: 2, type: 'spring', bounce: 0.2}}
  }

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <motion.div
      ref={ref}
      variants={elementVariant}
      initial='hidden'
      animate={control}
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