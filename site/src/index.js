import React from "react";
import ReactDOM from "react-dom";

import "./main.css";
import Header from "./Header/Header";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Skillset from "./Skillset/Skillset";
import Education from "./Education/Education";
import Contact from "./Contact/Contact";
import Playground from "./Playground/Playground";

ReactDOM.render(
    <div id="main-container">
        <Playground />
        <Header />
        <About />
        <Experience />
        <Skillset />
        <Education />
        <Contact />
    </div>, 
    document.getElementById("app"));