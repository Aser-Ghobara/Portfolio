import React, { useEffect, useState } from 'react';
import useTypingAnimation from './useTypingAnimation';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import About from './About';

const MainPage = () => {
  const [showSocials, setShowSocials] = useState(false);
  const animatedName = useTypingAnimation('Aser Ghobara', 100);
  const animatedDescription = useTypingAnimation('Highlighting my skills and projects as a software engineer.', 50);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home">


      <div className="home2">
        <div className="content">
          <div className="container2">
            <div className={`hero ${animate ? 'animate' : ''}`}>
              <div class="text">
                <h1>{animatedName}</h1>
                <p>{animatedDescription}</p>
              </div>
            </div>  
          </div>
      
        <div className="socials-panel">
        <div className="sidepanel">
  <div
    className={`arrow ${showSocials ? 'show' : ''}`}
    onMouseEnter={() => setShowSocials(true)}
    onMouseLeave={() => setShowSocials(false)}
  >

    <i className="fa fa-angle-right" aria-hidden="true"></i>
    
  </div>

  <div className={`socials ${showSocials ? 'show-socials' : ''}`}>
    <ul className="icons">
      <li>
        <a href="https://www.linkedin.com/in/aser-ghobara-0b1b3b1b0/" target="_blank" rel="noreferrer">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/aserghobara/" target="_blank" rel="noreferrer">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
    </div>
  </div>
        </div>  

        </div>
        

        
        <div id="section1">
          <Projects />
        </div>

        <div id="section2">
          <About />
        </div>
     
      </div>

    </section>
  );
};

export default MainPage;
