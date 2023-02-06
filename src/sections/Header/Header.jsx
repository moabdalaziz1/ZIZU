import './Header.scss';
import { AboutMe } from '../../components/index';

const Header = () => {

  return (
    <header className='header main' id='aboutMe'>
      <div className="container">
        <AboutMe />
      </div>
    </header>
  )
}

export default Header