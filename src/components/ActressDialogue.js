import React, { Component } from 'react';
import './Dialogue.css';
import {connect } from 'react-redux';

export class ActressDialogue extends Component {

    componentDidMount() {
        if (this.props.persons.includes("Actress")) {
            return;
        }else {
        this.props.addPOI()}
    }

    constructor(props) {
        super(props);
        this.state = {
            dialogue: "You know detective, it isn't polite to stare. You do know who I am, right? I was on that super popular Netflix movie, Knights Without Time.",
            portrait: "actresslaugh.PNG"
        }
    }

    know = () => {
        this.setState({
            dialogue: "Well, I know he has money. I think he's some big, investor or something? We spoke at the bar for a bit our first night on the boat. He seemed nice.",
            portrait: "actressneutral.PNG"
        })
    }

    lastNight = () => {
        this.setState({
            dialogue: "See the victim?  More like HEAR him. He and his wife were arguing profusely at dinner. The wife sounded really upset about him spending time with his business partner... not that I was eavesdropping or anything, they were THAT loud about it.",
            portrait: "actressannoyedhand.PNG"
        })
        if (this.props.clues.includes("Victim argued with wife")) {
            return;
        }else {
        this.props.addClue()}

    }
    dinner = () => {
        this.setState({
            dialogue: "Let's see... it was him, his wife, and then the victim's business partner showed up. If you want to talk to him, I think I last saw him out by the pool.",
            portrait: "actressconcern.PNG"
        })
        this.props.addLocation()
    }

    goodbye = () => {
        this.setState({
            dialogue: "Bye bye, detective. I hope you catch the bad guy quickly! It's a little eerie being on this boat knowing they're still out there.",
            portrait: "actresslaugh.PNG"
        })
    }

    render() {
        return (
            <div className="dialogueContainer">
            <div className="speaker">
                            <img src={`/images/characterModels/${this.state.portrait}`} alt="actress"/>
                        </div>
                        <div className="leftBox">
                            <div className="textBox">
                                <p>You go to the restaurant where the victim was last seen alive. There is another passenger here. She looks familiar...</p><br/>
                                <div>
                {this.state.dialogue}
                <div className="buttonDiv">
                                <br/>
                <br/><button className="dialogueButton" onClick={this.lastNight}>Did you see the victim here last night?</button>
                <br/><button className="dialogueButton" onClick={this.know}>What do you know about the victim?</button>
                <br/><button className="dialogueButton" onClick={this.dinner}>Who else was having dinner with the victim?</button>
                <br/><button className="dialogueButton" onClick={this.goodbye}>Thank you, miss. I will be on my way.</button>
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
            return dispatch({type: 'ADD_CLUE', payload: {clue: "Victim argued with wife"}})
        },
        addLocation: () => {    
            return dispatch({type: 'ADD_LOCATION', payload: {location: "Pool"}})
        },
        addPOI: () => {
            return dispatch({type: 'ADD_POI', payload: {persons: "Actress"}})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActressDialogue)