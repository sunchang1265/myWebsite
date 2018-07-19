import React from "react";
import "./Experience.css";
import img_exp from "../images/experience.png";
import Popup from "./Popup/Popup";

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayPopup: false
        };
        //this.showPopup = this.showPopup.bind(this);
    }

    togglePopup(){
        this.setState({
            displayPopup: !this.state.displayPopup
        });
    }

    render(){
        let popUp = this.state.displayPopup ? <Popup closePopup={()=>this.togglePopup()}/> : null;
        return (
            
            <div id="experience" className="section-container section-container-blue">
                {popUp}
                <div className="left-section">
                    <h2>Experience</h2>
                    <img id="about-img" src={img_exp} />
                </div>
                <div className="right-section">
                    <div className="right-section-content-blue">
                        <h3>Summary</h3>
                        <p>&#9679; Over 4 years of professional experience as a C# .Net developer. </p>
                        <p>&#9679; Over 3 years of experience as a front-end web application developer. (AngularJS). </p>
                        <p>&#9679; Over 1 year experience as  a back-end web developer with NodeJS and ASP.NET. </p>
                        <p>&#9679; Having solid skills in developing windows forms applications and front-end development. </p>
                        <p>&#9679; Familiar with object oriented programming and agile development methodology.  </p>
                        <p>&#9679; Experience in SQL server and MongoDB. </p>
                        <p>&#9679; Experience in implementing data visualization with JavaScript libraries. (Dojo.js, D3.js and AmCharts) </p>   

                        {/* <hr /> */}                        
                        <div className="experience-box" onClick={()=>this.togglePopup()}>
                            <div className="experience-title">Securiport LLC</div>
                            <div className="experience-position">Software Engineer</div>
                            <div className="experience-time">Jun 2014 - Present</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Experience;