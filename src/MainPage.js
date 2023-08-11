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
              <div class="image profile">          
                <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    height="400px" alt="profile pic" />        
              </div>
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
        

        <div class="hero flex items-centre justify-between">
          <div class="left flex-1 justify-center">
            <img src="https://i.imgur.com/JPUVPVl.png" />
          </div>

          <div class="right flex-1">
            <h6>Aser Ghobara</h6>
            <h1>I am a Software Engineer</h1>

            <p>
              I am a software engineer based in Canada. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences. 
            </p>
            <div><button class="btn btn-secondary">DOWNLOAD CV</button></div>
        </div>

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
