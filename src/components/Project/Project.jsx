import './Project.scss';
import { MainButton } from '../../components/index';

const Project = ({ item }) => {

  return (
    <div className="col-lg-4 col-sm-6">
      <div className="project">
        <div className="project-name py-2">
          {item.title}
        </div>
        <a 
          href={item.pageLink} 
          target='_blank'
          rel="noreferrer"
        >
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
            demo
          </MainButton>
          <MainButton btnLink={item.githubRepoLink}>
            github repo
          </MainButton>
        </div>
      </div>
    </div>
  )
}

export default Project