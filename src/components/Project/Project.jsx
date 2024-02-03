import './Project.scss';
import { MainButton, ProjectEye } from '../../components/index';
import { motion } from 'framer-motion';
import { AnimateContext } from '../../Contexts/Context';
import { useContext } from 'react';

const Project = ({ item }) => {

  const { initialSecondary, whileInView, transition } = useContext(AnimateContext);


  return (
    <motion.div
      initial={initialSecondary}
      whileInView={whileInView}
      transition={transition}
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
          <img src={item.coverImg} className='card-img-top' alt={item.title} />
        </a>  
        <div className="project-skills p-3">
          <div className="skills-list">
            {
              item.usedSkills.map((item, index) => (
                <span key={index}>{item}</span>
              ))
            }
          </div>
          <div className='project-Details'> 
            <p>The Purpose : <span>{item.for}</span></p> 
            <p>Date Created : <span>{item.date}</span></p> 
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