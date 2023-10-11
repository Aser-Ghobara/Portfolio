import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.css';
import MainPage from './MainPage';
// import About from './About';
// import Projects from './Projects';
// import Skills from './Skills';
import Contact from './Contact';

const App = () => {
  function scrollToSection1() {
    const section1 = document.getElementById('section1');
    section1.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToSection2() {
    const section2 = document.getElementById('section2');
    section2.scrollIntoView({ behavior: 'smooth' });
  }

  // function scrollToSection3() {
  //   const section3 = document.getElementById('section3');
  //   section3.scrollIntoView({ behavior: 'smooth' });
  // }


  return (
    <div className="portfolio">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about" onClick={scrollToSection2} >About</Link></li>
            
            <li>
              {/* Pass the scrollToSection1 function as a prop */}
              <Link to="/projects" onClick={scrollToSection1}>
                Projects
              </Link>
            </li>

            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <div className="wheelbox">
        <div className="half-wheel-container">
          <nav>
            <ul>
              {/* Rest of your navigation items */}
            </ul>
          </nav>
        </div>
      </div>

      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<MainPage />} />
          <Route path="/about" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2023 Aser Ghobara</p>
      </footer>
    </div>
  );
};

export default App;
