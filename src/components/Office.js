import React, { Component } from 'react';
import './Window.css';
class Office extends Component {
    render() {
        return (
            <div>
            <div className="background">
                    <img src="/images/office.jpg"/>
                </div>
                    <div className="dialogueBox">
                        <div className="speaker">
                            <img src="/images/characterModels/placeholder.PNG"/>
                        </div>
                        <div className="leftBox">
                            <div className="textBox">
                            You’re a detective on the cruise ship Beloved of the Seas.  What was supposed to be a relaxing vacation for you has quickly become more business than pleasure with the murder of one of the other passengers.<br/>
                            Choose a location to begin your investigation.
                            </div>
                        </div>
                    </div>
                    </div>
        )
    }
}

export default Office;