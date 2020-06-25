import React, { Component } from 'react'
import './Window.css';

export class Window extends Component {
    render() {
        return (
            <div className="mainWindow">
                <div className="background">
                    <img src="/images/bedroom.jpg"/>
                    <div className="dialogueBox">
                        <div className="speaker">
                            <img src="/images/characterModels/actresslaugh.PNG"/>
                        </div>
                        <div className="textBox">
                            This is where the story text will go. Things will be happening here.  These are words in the story.<br/>
                            <ul>
                                <li>Player Choice</li>
                                <li>Player Choice</li>
                                <li>Player Choice</li>
                            </ul>
                        </div>
                        <div className="inventory">
                            <h2>Your Inventory</h2>
                            <ul>
                                <li>Clue 1</li>
                                <li>Clue 2</li>
                                <li>Clue 2</li>
                                <li>Clue 2</li>
                                <li>Clue 2</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Window
