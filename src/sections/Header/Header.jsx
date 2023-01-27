import './Header.scss';
import { AboutMe } from '../../components/index';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Header = () => {

  // For The Animation
  const { ref, inView } = useInView({
    threshold: 0.5,
    "rootMargin": "250px 0px 0px 150px"
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        transition: { duration: 1 }
      })
    } else {
      animation.start({ 
        scale: 0,
        transition: { duration: 1 }
      })
    }
  });

  return (
    <header className='header main' id='aboutMe' ref={ref}>
      <div className="container">
        <AboutMe animation={animation} />
      </div>
    </header>
  )
}

export default Header