import React from "react";
import ReactDOM from "react-dom";

import "./main.css";
import Header from "./Header/Header";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Skillset from "./Skillset/Skillset";
import Education from "./Education/Education";

ReactDOM.render(
    <div id="main-container">
        <Header />
        <About />
        <Experience />
        <Skillset />
        <Education />
    </div>, 
    document.getElementById("app"));