import './Portfolio.scss';
import { FaThLarge } from 'react-icons/fa'
import { SectionTitle, Project, LoadButton } from '../../components/index';

import projectsData from '../../data/projectsData';

const Portfolio = ({ currentItems, handleProjects }) => {

  return (
    <section className='portfolio p-md-5 px-3 py-5 main bg-white' id='portfolio'>
      <SectionTitle title='portfolio' icon={<FaThLarge />} />
      <div className="projects row g-4">
        {
          projectsData?.slice(0, currentItems)?.map((item) => (
            <Project key={item.id} item={item} />
          ))
        }
      </div>
      {
        projectsData?.length > currentItems && 
        <LoadButton handleClick={handleProjects} />
      }
    </section>
  )
}

export default Portfolio