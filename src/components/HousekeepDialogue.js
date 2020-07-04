import React, { Component } from 'react';
import './Dialogue.css';
import {connect } from 'react-redux';

export class HousekeepDialogue extends Component {

    componentDidMount() {
        this.props.addPOI()
    }

    constructor(props) {
        super(props);
        this.state = {
            dialogue: "Hello, can I help you?",
            portrait: "housekeepneutral.PNG"
        }
    }

    findClue = () => {
        this.setState({
            dialogue: "I don't know if this is important to the case, but it was hidden under the mattress. People should know by now that is a terrible hiding spot.",
            portrait: "housekeephappy.PNG"
        })
        this.props.addClue()
    }

    findEarring = () => {
        this.setState({
            dialogue: "You know, I DID find a broken earring there this morning. I was going to try and fix it but if it's important to the case, you can have it.",
            portrait: "housekeepclosed.PNG"
        })
        this.props.updateClue()
    }

    visitors = () => {
        this.setState({
            dialogue: "I recall seeing another gentleman.. I believe it was his business partner. He was knocking on the victim's door.  He seemed very insistant on getting in.  I didn't stick around to see what happened though.",
            portrait: "housekeepannoyed.PNG"
        })
    }

    goodbye = () => {
        this.setState({
            dialogue: "Goodbye, detective!",
            portrait: "housekeepneutral.PNG"
        })
    }

    render() {
        return (
            <div className="dialogueContainer">
            <div className="speaker">
                            <img src={`/images/characterModels/${this.state.portrait}`} alt="housekeeper"/>
                        </div>
                        <div className="leftBox">
                            <div className="textBox">
                                <p>You wander the ship and end up outside on the deck.  You spot the housekeeper that was in charge of cleaning the victim's room.</p><br/>
                                <div>
                {this.state.dialogue}
                <br/><button onClick={this.findClue}>Did you find anything that might be a clue?</button>
                <br/><button onClick={this.findEarring}>Have you seen the victim's wife's earring?</button>
                <br/><button onClick={this.visitors}>Was anyone else in the victim's room that evening?</button>
                <br/><button onClick={this.goodbye}>Thank you, goodbye.</button>
            </div>
                        </div>
                    </div>


            
            </div>
        )
    }
}

//export default Dialogue

const mapStateToProps = (state) => {  
    return { 
        ...state 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addClue: () => {    
            return dispatch({type: 'ADD_CLUE', payload: {clue: "Movie contract"}})
        },
        updateClue: () => {    
            return dispatch({type: 'UPDATE_CLUE', payload: {clue: "Broken earring"}})
        },
        addPOI: () => {
            return dispatch({type: 'ADD_POI', payload: {persons: "Housekeeper"}})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HousekeepDialogue)