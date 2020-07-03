import React, { Component } from 'react';
import './Window.css';
import Dialogue from './PartnerDialogue';
class Pool extends Component {
    render() {
        return (
            <div>
            <div className="background">
                    <img src="/images/cruisepool.jpg" alt="pool"/>
                </div>
                    <div className="dialogueBox">
                    <Dialogue/>
                    </div>
                    </div>
        )
    }
}

export default Pool;