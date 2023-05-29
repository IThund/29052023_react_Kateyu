import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.scss";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h2> {project.name}</h2>
      <a href={project.url}>
        <img src={project.image} />
      </a>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.url}> {project.url} </a>
    </div>
  );
}

export default ProjectDisplay;