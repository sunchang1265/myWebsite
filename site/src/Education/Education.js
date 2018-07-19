import React from "react";
import "./Education.css";
import edu_img from "../images/education-icon.png";

class Education extends React.Component {
    render() {
        return (

            <div id="Education" className="section-container section-container-blue">
                <div className="left-section">
                    <h2>Education</h2>
                    <img className="left-section-img" src={edu_img} />
                </div>
                <div className="right-section">
                    <div className="right-section-content-blue">
                        <h2>The George Washington University, Washington DC</h2>
                        <div>Master of Science, Computer Science, May 2014</div>

                        <h2>Beijing Institute of Technology, Beijing China</h2>
                        <div>Bachelor of Engineering, Software Engineering, June 2012</div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Education;