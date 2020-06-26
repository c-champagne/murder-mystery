import React, { Component } from 'react';
import './Window.css';
class Restaurant extends Component {
    render() {
        return (
            <div>
            <div className="background">
                    <img src="/images/restaurant.jpg"/>
                </div>
                    <div className="dialogueBox">
                        <div className="speaker">
                            <img src="/images/characterModels/actressneutral.PNG"/>
                        </div>
                        <div className="leftBox">
                            <div className="textBox">
                                You go to the restaurant where the victim was last seen alive. There is another passenger here.<br/>
                            </div>
                        </div>
                    </div>
                    </div>
        )
    }
}

export default Restaurant;