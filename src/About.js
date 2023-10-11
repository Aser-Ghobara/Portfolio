// import React from 'react';

// const About = () => {
//   return (
//     <section id="about">

// <div className="aboutMe-title">
//         <h3>About Me</h3>
//         </div>
      
//       <div className="aboutMe">
        
//         <div className="aboutMe-info">
//           <h2>Aser Ghobara</h2>
//           <p>A third-year software engineering student at the University Of Calgary.
//         Committed to crafting exceptional digital experiences that leave a positive impact.
//           </p>
//           </div>

//         <div className="aboutMe-img">
//           <img src="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face-thumbnail.jpg" alt="Aser Ghobara" class="profilepic" />
//           <h2>*This section is still under development.*</h2>
//         </div>
        
//         <div className="aboutMe-skills">
//           <h2>My Skills</h2>
//           <p>Here are some of the technologies I have worked with:</p>
//           <div className="skills">
//             <div className="skill">
//               <list>
//               <h3>HTML</h3>
//               <h3>CSS</h3>
//               <h3>JavaScript</h3>
//               <h3>React</h3>
//               <h3>C++</h3>
//               <h3>Java</h3>
//               <h3>Python</h3>
//               <h3>C</h3>
//               <h3>MySQL</h3>
//               <h3>AWS</h3>
//               </list>
//               <div className="bar">
//                 <div className="progress html"></div>
                


              
//             </div>
//             </div>
//           </div>
//         </div>
     
//       </div>
    
//     </section>
//   );
// }

// export default About;


import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="aboutMe-title">
        <h3>About Me</h3>
      </div>

      <div className="aboutMe">
        <div className="aboutMe-info">
          <h2>Aser Ghobara</h2>
          <p>
            A third-year software engineering student at the University of Calgary. Committed to crafting exceptional digital experiences that leave a positive impact.
          </p>
        </div>

        <div className="aboutMe-img">
          <img
            src="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face-thumbnail.jpg"
            alt="Aser Ghobara"
            className="profilepic"
          />
          <h2>*This section is still under development.*</h2>
        </div>

        <div className="aboutMe-skills">
          <div className="skills">
          <h2>My Skills</h2>
          <p>Here are some of the technologies I have worked with:</p>
          <ul className="skills">
            <li>
              <h3>ReactJS</h3>
              <div className="bar">
                <div className="progresshtml">80%</div>
              </div>
            </li>
            <li>
              <h3>CSS</h3>
              <div className="bar">
                <div className="progresscss">100%</div>
              </div>
            </li>
            <li>
              <h3>JavaScript</h3>
              <div className="bar">
                <div className="progressjs">70%</div>
              </div>
            </li>
            <li>
              <h3>C++</h3>
              <div className="bar">
                <div className="progresscpp">80%</div>
              </div>
            </li>
            <li>
              <h3>C</h3>
              <div className="bar">
                <div className="progressc">70%</div>
              </div>
            </li>
            <li>
              <h3>Java</h3>
              <div className="bar">
                <div className="progressjava">65%</div>
              </div>
            </li>
            <li>
              <h3>Python</h3>
              <div className="bar">
                <div className="progresspython">90%</div>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
}

export default About;
