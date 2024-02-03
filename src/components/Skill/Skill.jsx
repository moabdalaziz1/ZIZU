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
      {
        item.isImg ?
        <span className='icon-img'>
          <img src={item.skillIconImg} alt="skill-icon" />
        </span> : <span></span>
      }
    </div>
  )
}

export default Skill