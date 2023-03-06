import './Project.scss';
import { MainButton, ProjectEye } from '../../components/index';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Project = ({ item }) => {

  const elementVariant = {
    visible: {scale: 1, opacity: 1, transition: {duration: 2, type: 'spring', bounce: 0.2}},
    hidden: {scale: 0, opacity: 0, transition: {duration: 2, type: 'spring', bounce: 0.2}}
  }

  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4
  });

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
      className="col-lg-4 col-sm-6"
    >
      <div className="project">
        <div className="project-name py-2">
          {item.title}
        </div>
        <a 
          href={item.pageLink} 
          target='_blank'
          rel="noreferrer"
          className='project-img-link'
        >
          <ProjectEye />
          <img src={item.coverImg} className='card-img-top project-img' alt={item.title} />
        </a>  
        <div className="project-skills p-3">
          <h5>developed using:</h5>
          <div className="skills-list">
            {
              item.usedSkills.map((item, index) => (
                <span key={index}>{item}</span>
              ))
            }
          </div>
        </div>
        <div className="project-btns p-3">
          <MainButton btnLink={item.pageLink}>
            live demo
          </MainButton>
          <MainButton btnLink={item.githubRepoLink}>
            github repo
          </MainButton>
        </div>
      </div>
    </motion.div>
  )
}

export default Project