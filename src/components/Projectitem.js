
import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id , url}) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem w-100"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div className="image-container">
        <div className="image-container">
          <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        </div>
        <h4> {name} </h4>
        <a href={url}> {url}</a>
      </div>
    </div>
  );
}

export default ProjectItem;