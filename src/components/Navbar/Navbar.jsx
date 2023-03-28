import './Navbar.scss';
import { useState, useEffect } from 'react';
import { NavItems, Sidebar } from '../index';

const Navbar = () => {
  // General variables..
  const scrollLinks = document.querySelectorAll('.navbar-nav li a');
  const sections = document.querySelectorAll('.main');
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    // The Callback Function For The Scroll Event!
    const handleScroll = () => {
      const scrollPosition = document.documentElement.scrollTop;
      // To Add Some Styles To The Navbar When The scroll bar passes 200!
      scrollPosition >= 200 ? setIsPassed(true) : setIsPassed(false)
      // Adding Active Class To The Section That Matches The View Point While Scrolling!
      for (let i = 0; i < sections.length; i++) {
        if (
          (scrollPosition + 90) >= sections[i].offsetTop &&
          (scrollPosition + 90) < (sections[i].offsetTop + (sections[i].offsetHeight))
        ) {
          scrollLinks[i].classList.add('active');
        } else {
          scrollLinks[i].classList.remove('active');
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  // handles Scrolling To A Specific Section When The NavList Item That Related Gets Clicked!
  const scrollingToTargetSection = (e) => {
    // Prevent The Default Behavior
    e.preventDefault();
    // General variables..
    const id = e.target.getAttribute('href');
    const targetSection = document.getElementById(id);
    // Adding Class Active To The Clicked NavLink!
    if (id === targetSection.id) {
      for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].classList.remove('active');
      }
      e.target.classList.add('active');
    }
    // Scrolling To The Section That Related To The Clicked Nav Item!
    let heightDiscount = window.innerWidth >= 768 ? 88 : 0
    window.scrollBy({
      top: targetSection.getBoundingClientRect().y - heightDiscount,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <nav
        className={
          `navbar navbar-expand-md fixed-top pt-0 pt-md-2 ${
            (window.innerWidth >= 768 && isPassed) ? 'noTransparrent' : ''
          }`
        }
      >
        <div className="container-fluid justify-content-md-center justify-content-end">
          {
            window.innerWidth >= 768 ? 
              <NavItems handleClick={scrollingToTargetSection} /> :
              <Sidebar  handleClick={scrollingToTargetSection} />
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar