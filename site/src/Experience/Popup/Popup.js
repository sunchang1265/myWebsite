import React from "react";
import "./Popup.css";

class Popup extends React.Component {
    


    render(){
        let detail = this.props.detail;
        let sections = [];
        for(let i=0; i<detail.length; i++){
            
            let duties = detail[i].duties.map((duty) => 
                <p key={duty}>{duty}</p>
            );

            sections.push(
                <div className="pop-section">
                    <div className="pop-title">{detail[i].project}</div>
                    <div className="pop-subtitle">{detail[i].intro}</div>
                    {duties}
                </div>
            );
        }
        return (
            <div id="Popup" onClick={this.props.closePopup}>
                <div id="pop-container">
                    {sections}
                </div>
            </div>
        );
    }
}

export default Popup;