import React, { Component } from 'react';
import './Window.css';
class CruiseDeck extends Component {
    render() {
        return (
            <div>
            <div className="background">
                    <img src="/images/cruisedeck.jpg"/>
                </div>
                    <div className="dialogueBox">
                        <div className="speaker">
                            <img src="/images/characterModels/housekeepneutral.PNG"/>
                        </div>
                        <div className="leftBox">
                            <div className="textBox">
                                You wander the ship and end up outside on the deck.  You spot the housekeeper that was in charge of cleaning the room.<br/>
                            </div>
                        </div>
                    </div>
                    </div>
        )
    }
}

export default CruiseDeck;