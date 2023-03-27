import { useState, useEffect } from 'react';
import './App.scss';
import { UpButton, Navbar, Loader } from './components/index';
import { Header, Certificates,Skills, Portfolio, Contact } from './sections/index';
import { motion, useScroll, useSpring } from "framer-motion";
import { LoadMoreContext, AnimateContext } from './Contexts/LoadMoreContext';

const App = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // For LoadMoreContext.
  const [next, setNext] = useState({
    certificates: 2,
    projects: 3,
  });
  // For AnimateContext.
  const animation = {
    initial: { opacity: 0, y: '-200px' },
    initialSecondary: { opacity: 0, y: '200px' },
    whileInView:{ opacity: 1, y: '0' },
    transition:{ duration: 1 }
  }

  // For The Loader.
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.addEventListener('load', () => setIsLoading(true));
    return () => {
      window.removeEventListener('load', () => setIsLoading(true));
    }
  }, []);

  return (
    <>
      {
        isLoading ? 
          <>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <div className='text-center'>
              <UpButton />
              <LoadMoreContext.Provider value={{next, setNext}}>
                <AnimateContext.Provider value={animation}>
                  <Navbar />
                  <Header />
                  <Certificates />
                  <Skills />
                  <Portfolio />
                  <Contact />
                </AnimateContext.Provider>
              </LoadMoreContext.Provider>
            </div>
          </> : 
          <Loader />
      }
    </>
  )
}

export default App