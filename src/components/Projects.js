import React from 'react';
import rubyScreenshot from '../ruby-app.jpeg';
import javaScreenShot from '../restaurant-app.jpeg';
import javascriptScreenShot from '../javascript-app.jpeg';
import './styling/Projects.css';

const Projects = () => (
  <div className="Projects-Container">
    <h4>This is where the projects will go</h4>
    <div className="cc-projects">
      <div className="cc-project-box">
        <img src={rubyScreenshot} alt="ruby-app" />
        <p>Ruby Project</p>
      </div>
      <div className="cc-project-box alt-display">
        <img src={javaScreenShot} alt="java-app" />
        <p>Java Project</p>
      </div>
      <div className="cc-project-box">
        <img src={javascriptScreenShot} alt="javaScript-app" />
        <p>JavaScript Project</p>
      </div>
    </div>
  </div>
);

export default Projects;
