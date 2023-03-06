import './Skill.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Skill = ({ item }) => {

  const elementVariant = {
    visible: {scale: 1, opacity: 1, transition: {duration: 2, type: 'spring', bounce: 0.3, delay: 0.1}},
    hidden: {scale: 0, opacity: 0, transition: {duration: 2, type: 'spring', bounce: 0.3, delay: 0.1}}
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
      className='skill'
    >
      <span className='skill-name me-2'>
        {item.skill}
      </span>
      <span className={`skill-icon ${item.colorClass}`}>
        {item.skillIcon}
      </span>
    </motion.div>
  )
}

export default Skill