import React from "react";
import "./Popup.css";

class Popup extends React.Component {


    render(){
        return (
            <div id="Popup" onClick={this.props.closePopup}>
                <div id="pop-container">
                    <div className="pop-section">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;