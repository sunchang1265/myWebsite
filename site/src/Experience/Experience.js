import React from "react";
import "./Experience.css";
import img_exp from "../images/experience.png";
import Popup from "./Popup/Popup";

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayPopup: false,
            displayData: {},
            data: {
                Securiport: [
                    {
                        project: "Advanced Passenger Information System",
                        intro: "A system that helps airports monitor and manage all incoming and outgoing flights",
                        duties: [
                            "- Developed Advanced Passenger Information System(APIS) web application with angularJS, NodeJS and MongoDB.",
                            "- Translated designs to front-end code to make the system looks nice and user friendly.",
                            "- Created flights map and radar chart to provider the ability to visualize overall flights history of traveler in APIS with JS visualization libraries (D3.js, AmCharts).",
                            "- Contributed as a full stack developer. Participated in web services development with NodeJS.",
                            "- Helped deployment with Docker to make system easy to be deployed to different platform."
                        ]
                    },
                    {
                        project: "eGate Terminal and eGate Monitor",
                        intro: "An automated immigration gate provides a quick way of enrollment for frequent low-risk travelers",
                        duties: [
                            "- Participated in developing eGate Terminal application to provide an ability to make the hardware gate work as a state machine.",
                            "- Simplify the code to make eGate application be able to restructure the enrollment process easily based on configuration",
                            "- Created eGate Monitor application to monitor activities and performance of the gate application.",
                            "- Provided ability for eGate Monitor to communicate with eGate hardware via web socket for real time monitoring.",                            
                        ]
                    },
                    {
                        project: "Integrated Immigration Control System",
                        intro: "A system that helps countries’ border control and security",
                        duties: [
                            "- Contributed software engineering expertise in the development of IICS; Collaborate with other team members in design, testing and maintaining IICS for different clients in multiple countries.",
                            "- Took charge of defects fixing and testing for applications in IICS to help operation team for production deployment.",
                            "- Researched and participated in design of dashboard manager application of IICS.",
                            "- Implemented all the interactive graphic dashboards using Dojo.js and D3.js for data visualization.",
                            "- Created and maintained Microsoft reports and crystal reports in reporting manager application."
                        ]
                    },
                    {
                        project: "Kiosk application",
                        intro: "An application running on kiosk that deigned for self-enrollment at airport",
                        duties: [
                            "- Developed self-service Kiosk application for immigration control. Using AngularJS as front-end and communicate with .net WCF services.",
                            "- Translated designs to front-end code; Estimate time and costs, and determined developer requirements and specifications.",
                            "- Implemented specialized user interfaces for showing streaming output from biometric devices."
                        ]
                    },
                    {
                        project: "Selected General Accomplishment",
                        intro: "A system that helps airports monitor and manage all incoming and outgoing flights",
                        duties: [
                            "- Created several reusable interactive modules with JavaScript that can be nested into windows form applications.",
                            "- In charge of daily .NET entity framework data model update based on database changes, guaranteed all developers having latest data model mapping to database.",
                            "- Participated in creating SQL stored procedures to provide quick and efficient data reading for front end code use in database.",
                            "- Developed performance tests console application for IICS. Accomplished pressures test by running the test application and helped improve performance of enrollments for IICS.",                            
                        ]
                    }
                ],
                Hongcheng: [
                    {
                        project: "General Responsiblies",
                        intro: "",
                        duties: [
                            "- Participated in the development of online petition reception system of discipline inspection for city authority.",
                            "- In charge of tests as software test Engineer. Including testing user interface, functionality and performance testing.",
                            "- Met customers and introduced how to use this software as an instructor and collected users’ feedback."                       
                        ]
                    }
                ]
            }
        };
    }

    togglePopup(value){
        this.setState({
            displayPopup: !this.state.displayPopup,
            displayData: this.state.data[value]
        });
    }

    render(){        
        let popUp = this.state.displayPopup ? <Popup detail={this.state.displayData} closePopup={()=>this.togglePopup()}/> : null;
        console.log(this.state.data);
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
                        
                        <div className="experience-box" onClick={()=>this.togglePopup('Securiport')} >
                            <div className="experience-title">Securiport LLC, Washington DC</div>
                            <div className="experience-position">Software Engineer</div>
                            <div className="experience-time">Jun 2014 - Present</div>
                        </div>
                        <div className="experience-box" onClick={()=>this.togglePopup('Hongcheng')} >
                            <div className="experience-title">Hongcheng Information Technology Co., Ltd, Jiangsu, China</div>
                            <div className="experience-position">Programmer Intern</div>
                            <div className="experience-time">Feb 2013 - Apr 2013</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Experience;