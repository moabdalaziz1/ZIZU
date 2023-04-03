import './SectionTitle.scss';

const SectionTitle = ({ icon, title }) => {
  return (
    <div className="section-title pb-4">
      <span className='title-icon'>
        {icon}
      </span>
      <div className='section-title-text'> 
        {title}
        <div className='line'></div>
      </div>
    </div>
  )
}

export default SectionTitle
