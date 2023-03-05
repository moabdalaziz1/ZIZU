import { useContext } from 'react';
import './Portfolio.scss';
import { FaThLarge } from 'react-icons/fa'
import { SectionTitle, Project, LoadButton } from '../../components/index';

import projectsData from '../../data/projectsData';
import { LoadMoreContext } from '../../Contexts/LoadMoreContext';

const Portfolio = () => {

  const { next, setNext } = useContext(LoadMoreContext);
  const handleProjects = () => setNext(prevState => ({
    ...prevState,
    projects: prevState.projects + 3
  }));

  return (
    <section className='portfolio p-md-5 px-3 py-5 main bg-white' id='portfolio'>
      <SectionTitle title='portfolio' icon={<FaThLarge />} />
      <div className="projects row g-4">
        {
          projectsData?.slice(0, next.projects)?.map((item) => (
            <Project key={item.id} item={item} />
          ))
        }
      </div>
      {
        projectsData?.length > next.projects && 
        <LoadButton handleClick={handleProjects} />
      }
    </section>
  )
}

export default Portfolio