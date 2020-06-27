import React, { Component } from 'react';
import './Window.css';
class CrimeScene extends Component {

    render() {
        return (
            <div>
            <div className="background">
                    <img src="/images/bedroom.jpg"/>
                </div>
                    <div className="dialogueBox">
                        <div className="speaker">
                            <img src="/images/characterModels/wifeneutral.PNG"/>
                        </div>
                        <div className="leftBox">
                            <div className="textBox">
                                You arrive at the crime scene.  The murder victim's wife is here.<br/>
                            </div>
                        </div>
                    </div>
                    </div>
        )
    }
}

export default CrimeScene;