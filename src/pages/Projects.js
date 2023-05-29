import React from 'react';
import ProjectItem from '../components/Projectitem';
//import css
import "../styles/Projects.scss";
//import porject list
import {ProjectList} from '../helpers/ProjectList';




function Projects() {
  return (
    <div className="projects container">
        <h2>Selected Work</h2>
        <div className="projectList">
            {ProjectList.map((project, idx) => {
                return <ProjectItem 
                id={idx} name={project.name} image={project.image} />
            })}
        </div>
    </div>
  )
}

export default Projects;