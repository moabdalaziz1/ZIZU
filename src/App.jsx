import { useState } from 'react';
import './App.scss';
import { UpButton, Navbar } from './components/index';
import { Header, Certificates,Skills, Portfolio, Contact } from './sections/index';
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const projectsPerRow = 3
  const certificatesPerRow = 2
  const [next, setNext] = useState({
    certificates: certificatesPerRow,
    projects: projectsPerRow,
  });
  const handleCertificates = () => setNext(prevState => ({
    ...prevState,
    certificates: prevState.certificates + certificatesPerRow,
  }));
  const handleProjects = () => setNext(prevState => ({
    ...prevState,
    projects: prevState.projects + projectsPerRow,
  }));

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className='text-center'>
        <UpButton />
        <Navbar />
        <Header />
        <Certificates currentItems={next.certificates} handleCertificates={handleCertificates} />
        <Skills />
        <Portfolio currentItems={next.projects} handleProjects={handleProjects} />
        <Contact />
      </div>
    </>
  )
}

export default App