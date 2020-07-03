import React, { Component } from 'react';
import './Window.css';
import Dialogue from './HousekeepDialogue';
class CruiseDeck extends Component {
    render() {
        return (
            <div>
            <div className="background">
                    <img src="/images/cruisedeck.jpg" alt="cruisedeck"/>
                </div>
                    <div className="dialogueBox">
                    <Dialogue/>
                    </div>
                    </div>
        )
    }
}

export default CruiseDeck;