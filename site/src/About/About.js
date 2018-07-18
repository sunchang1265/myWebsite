import React from "react";
import "./About.css";
import Img from "../images/male.png";

class About extends React.Component {
    render(){
        return (
            
            <div id="about">
                <div className="left-section">
                    <label>About</label>
                    <img id="about-img" src={Img} />
                </div>
                <div className="right-section">
                    Chang Sun
                </div>
            </div>
        );
    };
}

export default About;