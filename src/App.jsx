import { useState } from 'react';
import './App.scss';
import { UpButton, Navbar } from './components/index';
import { Header, Certificates,Skills, Portfolio, Contact } from './sections/index';
import { motion, useScroll, useSpring } from "framer-motion";
import { LoadMoreContext } from './Contexts/LoadMoreContext';

const App = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // For LoadMore Functionality Using (useContext)
  const [next, setNext] = useState({
    certificates: 2,
    projects: 3,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className='text-center'>
        <UpButton />
        <LoadMoreContext.Provider value={{next, setNext}}>
          <Navbar />
          <Header />
          <Certificates />
          <Skills />
          <Portfolio />
          <Contact />
        </LoadMoreContext.Provider>
      </div>
    </>
  )
}

export default App