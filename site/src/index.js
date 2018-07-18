import React from "react";
import ReactDOM from "react-dom";

import "./main.css";
import Header from "./Header/Header";
import About from "./About/About";
import Experience from "./Experience/Experience";

ReactDOM.render(
    <div id="main-container">
        <Header />
        <About />
        <Experience />
    </div>, 
    document.getElementById("app"));