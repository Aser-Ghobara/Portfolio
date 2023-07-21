import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.css';
import MainPage from './MainPage';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const App = () => {

  return (
    <div className="portfolio">
      <header>
        <nav>
          <ul>
            
          </ul>
        </nav>
      </header>
    <div className="wheelbox">
      <div className="half-wheel-container">
          <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
    </div>


      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
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
