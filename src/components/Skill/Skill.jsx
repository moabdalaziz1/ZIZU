import './Skill.scss';
import { motion } from 'framer-motion';

const Skill = ({ item }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: '48px' }}
      whileInView={{ opacity: 1, y: '0' }}
      transition={{ duration: 1 }}
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