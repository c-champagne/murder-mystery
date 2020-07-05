import React, { Component } from 'react';
import './Dialogue.css';
import {connect } from 'react-redux';

export class PartnerDialogue extends Component {

    componentDidMount() {
        this.props.addPOI()
    }

    constructor(props) {
        super(props);
        this.state = {
            dialogue: "Hello, detective. I hope you weren't looking for me.",
            portrait: "partnerneutral.PNG"
        }
    }

    looking = () => {
        this.setState({
            dialogue: "I just mean to say... I haven't been able to stay put since I heard what happened. I didn't sleep last night.",
            portrait: "partnerneutral.PNG"
        })
    }

    business = () => {
        this.setState({
            dialogue: "We shared the business evenly, 50/50. Now that he is gone, I will take over his portion. It's what he wanted; his wife wouldn't know the first thing about running the company.",
            portrait: "partnerneutral.PNG"
        })
        this.props.addClue()
    }

    contract = () => {
        this.setState({
            dialogue: "Oh, that. That actress.. the one from Knights Without Time on Netflix? Ridiculous movie, really.  Anyway, she's been trying to convince my partner to fund some movie of hers. She seemed a little desperate. I had finally convinced him to turn her away. He's got a soft spot for cheesy rom-coms.",
            portrait: "partnerneutral.PNG"
        })
        this.props.addClueTwo()
    }

    goodbye = () => {
        this.setState({
            dialogue: "Goodbye, detective!",
            portrait: "partnerneutral.PNG"
        })
    }

    render() {
        return (
            <div className="dialogueContainer">
            <div className="speaker">
                            <img src={`/images/characterModels/${this.state.portrait}`} alt="partner"/>
                        </div>
                        <div className="leftBox">
                            <div className="textBox">
                                <p>You head to the cruise ship's pool and spot a man matching the description the actress gave you.  You approach him.</p><br/>
                                <div>
                {this.state.dialogue}
                <br/><button onClick={this.looking}>Why would I be looking for you?</button>
                <br/><button onClick={this.business}>What will happen to the victim's business?</button>
                <br/><button onClick={this.contract}>Do you know anything about this movie contract?</button>
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
            return dispatch({type: 'ADD_CLUE', payload: {clue: "Partner has full business ownership"}})
        },
        addClueTwo: () => {    
            return dispatch({type: 'ADD_CLUE', payload: {clue: "Actress asked him for money"}})
        },
        addPOI: () => {
            return dispatch({type: 'ADD_POI', payload: {persons: "Partner"}})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartnerDialogue)