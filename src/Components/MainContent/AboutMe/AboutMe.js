import React from "react";

//styles
import "./AboutMe.scss";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="bio-container">
        <h1>Ola I Ka Makana Ma Ke Akua</h1>
        <p>(Life Is A Gift From God)</p>
        <h2>
          Aloha! My name is Edward. In case you were wondering, yes that is my
          full name on my home page. The hawaiian part means "Strength from the
          Gods". For most of my life I have been working in construction and the
          restaurant industry. After moving to California about 4 years ago to
          work with my uncle in construction, I decided that I needed to work on
          my brain instead of my body. Ever since I bought my own computer in
          High School I have been interested in computers. I decided to get into
          coding. In a short time, I have learned the back-end and front-end of
          development. Most recently have added React to my tool belt. I hope to
          join a team that is ready for someone who is determined, driving,
          hard-working, and a sponge for learning. The cherry on top is a laugh
          that can light up the room. After all{" "}
          <span>“Ola I Ka Makana Ma Ke Akua”</span>.
        </h2>
      </div>
      <div className="skills-container">
        <div className="left">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
          </div>
          <div className="skill-icon">
            <FontAwesomeIcon icon={faCss3Alt} /> CSS 3
          </div>
          <div className="skill-icon">
            <FontAwesomeIcon icon={faGitAlt} /> Git
          </div>
        </div>
        <div className="middle">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faGithub} /> Git Hub
          </div>
          <div className="skill-icon">
            <FontAwesomeIcon icon={faHtml5} /> HTML 5
          </div>
          <div className="skill-icon">
            <FontAwesomeIcon icon={faJsSquare} /> Javascript
          </div>
        </div>
        <div className="right">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faNode} /> Node
          </div>
          <div className="skill-icon">
            <FontAwesomeIcon icon={faReact} /> React
          </div>
          <div className="skill-icon">
            <FontAwesomeIcon icon={faSass} /> Sass
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
