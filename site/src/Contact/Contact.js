import React from "react";
import "./Contact.css";
import mail_img from "../images/mail-icon.png";
import linkedin_img from "../images/linkedin-icon.png";

class Contact extends React.Component {
    render() {
        return (

            <div id="Contact" className="section-container">
                <div className="left-section">
                    <h2 className="left-section-title-blue">Contact</h2>
                    <img className="left-section-img" src={mail_img} />
                </div>
                <div className="right-section">
                    <div className="right-section-content">
                        <h2>Email:</h2>
                        <div>sunchang1265@gmail.com</div>
                        <a target="_blank" href="https://www.linkedin.com/in/chang-sun-b14b8a115/?lipi=urn%3Ali%3Apage%3Ad_flagship3_job_details%3BheXYSqbsSuyIvAvDfcW6Yw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_job_details-nav.settings_view_profile">
                            <img id="linkedin-img" src={linkedin_img} />
                        </a>
                    </div>
                </div>
            </div>
        );
    };
}

export default Contact;