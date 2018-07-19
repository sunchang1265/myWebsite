import React from "react";
import "./About.css";
import img_male from "../images/male.png";

class About extends React.Component {
    render(){
        return (
            
            <div id="about" className="section-container">
                <div className="left-section">
                    <h2 className="left-section-title-blue">About</h2>
                    <img id="about-img" src={img_male} />
                </div>
                <div className="right-section">
                    <div className="right-section-content" id="about-right-content">
                        <h3>Chang Sun</h3>
                        <p>Offering rich responsive user interface to help solve business problems is what I do best.</p>
                        <p>Capable writing in JavaScript, CSS, also familiar with AngualarJS and ReactJS for web application front-end development.</p>
                        <p>I also speak to databases and make servers do stuff with C# .NET and NodeJS for SQL or NoSQL databases.
                           I like working on scalability, performance, reusability, and great user experiences.
                        </p>
                        <p> 
                           As a full stack developer, I write code that conforms to industry standards and semantic best practices. 
                           I am able to transform static artwork into pixel prefect, interactive and fully functional interfaces and capable doing all the back-end support as well.
                        </p>
                    </div>
                </div>
            </div>
        );
    };
}

export default About;