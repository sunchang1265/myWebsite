import React from "react";
import ReactDOM from "react-dom";

import "./main.css";
import Header from "./Header/Header";
import About from "./About/About";

ReactDOM.render(
    <div id="main-container">
        <Header />
        <About />
    </div>, 
    document.getElementById("app"));