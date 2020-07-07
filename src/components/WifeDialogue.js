import React, { Component } from 'react';
import './Dialogue.css';
import {connect } from 'react-redux';

export class WifeDialogue extends Component {

    componentDidMount() {
        if (this.props.persons.includes("Wife")) {
            return;
        }else {
        this.props.addPOI()}
    }

    constructor(props) {
        super(props);
        this.state = {
            dialogue: "Oh, hello detective. I think I'm ready to answer questions now.",
            portrait: "wifeneutral.PNG"
        }
    }

    earring = () => {
        this.setState({
            dialogue: "Oh, yes.  I don't know if I lost it before or after... this happened.  Maybe one of the cleaning staff has seen it.",
            portrait: "wifefrownhand.PNG"
        })
        if (this.props.clues.includes("Locate missing earring")) {
            return;
        }else {
        this.props.addClue()}
    }

    lastNight = () => {
        this.setState({
            dialogue: "My husband and I were at dinner with his business partner and everything was... fine.  It was just a normal evening.",
            portrait: "wifeeyesclosed.PNG"
        })
         this.props.addLocation()
    }

    about = () => {
        this.setState({
            dialogue: "Well, he.. was.. a very successful man.  He got along so well with everyone because he was a natural charmer. But he did seem stressed in recent months so I planned this cruise for us. I thought it would... help him.",
            portrait: "wifeeyesclosed.PNG"
        })
    }

    goodbye = () => {
        this.setState({
            dialogue: "Goodbye, detective.  Please let me know as soon as you find anything.",
            portrait: "wifeneutral.PNG"
        })
    }

    render() {
        return (
            <div className="dialogueContainer">
                <div className="speaker">
                    <img src={`/images/characterModels/${this.state.portrait}`} alt="wife"/>
                </div>
                <div className="leftBox">
                    <div className="textBox">
                        <p>You arrive at the crime scene. The body has already been removed and the room has been cleaned. The murder victim's wife is here.</p><br/>
                            <div className="stateContainer">
                                {this.state.dialogue}
                                
                                <div className="buttonDiv">
                                <br/>
                                <br/><button className="dialogueButton" onClick={this.lastNight}>Tell me about last night.</button>
                                <br/><button className="dialogueButton" onClick={this.earring}>Are you missing an earring?</button>
                                <br/><button className="dialogueButton" onClick={this.about}>What can you tell me about your husband?</button>
                                <br/><button className="dialogueButton" onClick={this.goodbye}>That's all for now, ma'am. Goodbye.</button>
                                </div>
                            </div>
                    </div>
                </div>


            
            </div>
        )
    }
}

const mapStateToProps = (state) => {  
    return { 
        ...state 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addClue: () => {    
            return dispatch({type: 'ADD_CLUE', payload: {clue: "Locate missing earring"}})
        },
        addLocation: () => {
            return dispatch({type: 'ADD_LOCATION', payload: {location: "Restaurant"}})
        },
        addPOI: () => {
            return dispatch({type: 'ADD_POI', payload: {persons: "Wife"}})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WifeDialogue)