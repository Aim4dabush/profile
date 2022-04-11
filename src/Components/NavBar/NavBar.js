import React, { useState } from "react";

//Routes
import { NavLink } from "react-router-dom";

//Styles
import "./NavBar.scss";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithub,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [open, setOpen] = useState(true);

  const toggleHandler = () => {
    setOpen((prevState) => {
      return prevState ? false : true;
    });
  };

  const openHandler = {
    display: open ? "none" : "inline-block",
  };

  return (
    <div className="nav-bar">
      <div className="social">
        <div className="social-container">
          <img src={process.env.PUBLIC_URL + "/images/me.png"} alt="me" />
          <ul>
            <li>
              <a
                className="social-icons"
                href="https://www.facebook.com/edward.arasato"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </li>
            <li>
              <a
                className="social-icons"
                href="https://github.com/Aim4dabush"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                className="social-icons"
                href="https://www.instagram.com/aim4dabush808/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </li>
            <li>
              <a
                className="social-icons"
                href="https://www.linkedin.com/in/ed-arasato-74614112a/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-links">
        <div className="nav-links-container">
          <div className="desktop">
            <ul>
              <li>
                <NavLink
                  exact={true}
                  to="/"
                  className="links"
                  activeClassName="selected"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-me"
                  className="links"
                  activeClassName="selected"
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="links"
                  activeClassName="selected"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className="links"
                  activeClassName="selected"
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="links"
                  activeClassName="selected"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="mobile">
            <button type="button" className="hamburger" onClick={toggleHandler}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <ul style={openHandler}>
              <li>
                <NavLink
                  exact={true}
                  to="/"
                  className="links"
                  activeClassName="selected"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-me"
                  className="links"
                  activeClassName="selected"
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="links"
                  activeClassName="selected"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className="links"
                  activeClassName="selected"
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="links"
                  activeClassName="selected"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
