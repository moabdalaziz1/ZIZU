import "./AboutMe.scss";
import { SocialMedia } from "../index";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { AnimateContext } from "../../Contexts/Context";
import { useContext } from "react";
import cv from "../../assets/CV.pdf";
import { FaDownload } from "react-icons/fa";

const AboutMe = () => {
  let myExperience = new Date().getFullYear() - 2022;
  const { initial, whileInView, transition } = useContext(AnimateContext);

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      className="about-me"
    >
      <div className="my-photo"></div>
      <div className="name">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Mohamed Abdulaziz").start();
          }}
        />
      </div>
      <div className="job-title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(500).typeString("Front-End Developer").start();
          }}
        />
      </div>
      <SocialMedia />
      <div className="my-info">
        <p>
          I am a passionate Front-End Developer with {myExperience} years of
          experience specializing in creating responsive, user-friendly web
          applications. I hold a Bachelor of Science in Computer Science (IT)
          from Kafr El-Sheikh University, Egypt, and I'm dedicated to delivering
          high-quality code and exceptional user experiences.
        </p>
      </div>
      <div className="my-cv">
        <a href={cv} download>
          Download Resume <FaDownload />
        </a>
      </div>
    </motion.div>
  );
};

export default AboutMe;
