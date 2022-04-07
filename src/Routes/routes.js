import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import AboutMe from "../Components/MainContent/AboutMe/AboutMe";
import Contact from "../Components/MainContent/Contact/Contact";
import Home from "../Components/MainContent/Home/Home";
import Projects from "../Components/MainContent/Projects/Projects";
import Resume from "../Components/MainContent/Resume/Resume";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about-me" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
  </Switch>
);
