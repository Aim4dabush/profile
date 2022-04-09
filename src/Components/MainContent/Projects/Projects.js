import React from "react";

//router
import { NavLink } from "react-router-dom";

//Styles
import "./Projects.scss";

//font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

//components
import ProjectDisplay from "./ProjectDisplay/ProjectDisplay";

//project list
import projects from "./ProjectList/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <ProjectDisplay projects={projects} />
      <div className="project-carousel-container">
        <div className="arrows">
          <FontAwesomeIcon icon={faCircleChevronLeft} />
        </div>
        <div className="image-carousel">
          {projects.map((project) => {
            return (
              <div key={project.id}>
                <NavLink
                  to={`/projects/${project.id}`}
                  activeClassName="selected"
                >
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className="arrows">
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
