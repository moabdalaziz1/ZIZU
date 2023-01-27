import './SectionTitle.scss';

const SectionTitle = ({ icon, title }) => {
  return (
    <div className="section-title pb-4">
      <span className='title-icon'>
        {icon}
      </span>
      <div>{title}</div>
    </div>
  )
}

export default SectionTitle
