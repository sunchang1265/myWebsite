import React from "react";
import "./Skillset.css";
import skill_img from "../images/skill-icon.png";

class Skillset extends React.Component {
    render() {
        return (

            <div id="Skillset" className="section-container">
                <div className="left-section">
                    <h2 className="left-section-title-blue">Skillset</h2>
                    <img className="left-section-img" src={skill_img} />
                </div>
                <div className="right-section">
                    <div className="right-section-content">
                        <h2>Languages:</h2>
                        <div>C# .Net, JavaScript(AngularJS, React, NodeJS), SQL</div>
                        <h2>Applications:</h2>
                        <div>MS Visual Studio, MS Visual Studio Code, MS Team Foundation, Git</div>
                        <h2>Operating Systems:</h2>
                        <div>Windows, Linux</div>
                        <h2>Databases:</h2>
                        <div>SQL server, MySQL, MariaDB, NoSQL DB( MongoDB)</div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Skillset;