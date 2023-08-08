import React, { useEffect, useState } from 'react';
import useTypingAnimation from './useTypingAnimation';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import About from './About';

const MainPage = () => {
  // Use the custom hook for typing animation
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
          <div className={`hero ${animate ? 'animate' : ''}`}>
            <h1>{animatedName}</h1>
            <p>{animatedDescription}</p>
          </div>

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

        <div className="buttons">
          <button className="btnproject">
            <Link to="/projects">Projects</Link>
          </button>
          <button className="btnresume">
            <a href="https://drive.google.com/file" target="_blank" rel="noreferrer">Resume</a>
          </button>
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
