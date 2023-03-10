import './Skill.scss';

const Skill = ({ item }) => {

  return (
    <div className='skill'>
      <span className='skill-name me-2'>
        {item.skill}
      </span>
      <span className={`skill-icon ${item.colorClass}`}>
        {item.skillIcon}
      </span>
    </div>
  )
}

export default Skill