import React from "react";

//routes
import { useParams } from "react-router-dom";

//style
import "./ProjectDisplay.scss";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function ProjectDisplay({ projects }) {
  const { id } = useParams();

  const index = projects.find((project) => {
    return project.id === id;
  });

  console.log(index);
  return (
    <div className="project-display">
      <div className="project-display-container">
        <iframe
          src={index?.siteLink}
          name={index?.title}
          title={index?.title}
        ></iframe>
        <div className="info">
          <h2>{index?.title}</h2>
          <p>{index?.description}</p>
          <div className="icon">
            {index?.languages.map((language) => {
              return (
                <div key={language?.id}>
                  <FontAwesomeIcon icon={language?.icon} />
                </div>
              );
            })}
          </div>
          <div className="other-links">
            {index ? (
              <ul>
                <li>
                  <a href={index?.gitHub} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                    Repository
                  </a>
                </li>
                <li>
                  <a href={index?.siteLink} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGlobe} /> Deployed Site
                  </a>
                </li>
              </ul>
            ) : null}
          </div>
          <div className="checks">
            <h3>{index?.mobile}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
