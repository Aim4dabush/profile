import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import AboutMe from "../Components/AboutMe/AboutMe";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import Projects from "../Components/Projects/Projects";
import Resume from "../Components/Resume/Resume";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about-me" component={AboutMe} />
    <Route exact path="/projects" component={Projects} />
    <Route path="/projects/:id" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
  </Switch>
);
