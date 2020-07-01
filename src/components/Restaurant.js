import React, { Component } from 'react';
import './Window.css';
import Dialogue from './ActressDialogue'


class Restaurant extends Component {
    render() {
        return (
            <div>
            <div className="background">
                    <img src="/images/restaurant.jpg"/>
                </div>
                    <div className="dialogueBox">
                       <Dialogue/>
                    </div>
                    </div>
        )
    }
}

export default Restaurant;