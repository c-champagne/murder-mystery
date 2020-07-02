import React, { Component } from 'react';
import './Dialogue.css';
import {connect } from 'react-redux';

export class HousekeepDialogue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dialogue: "Hello, can I help you?",
            portrait: "housekeepneutral.PNG"
        }
    }

    know = () => {
        this.setState({
            dialogue: "Well, I know he has money. I think he's some big, investor or something? We spoke at the bar for a bit. He seemed nice.",
            portrait: "actressneutral.PNG"
        })
    }

    lastNight = () => {
        this.setState({
            dialogue: "See the victim?  More like HEAR him. He and his wife were arguing profusely at dinner. I think they were arguing about money... not that I was eavesdropping or anything, they were THAT loud about it.",
            portrait: "actressannoyedhand.PNG"
        })
        this.props.addClue()
    }

    about = () => {
        this.setState({
            dialogue: "Well, he.. was.. a very successful man.  He got along so well with everyone because he was a natural charmer. But he did seem stressed in recent months so I planned this cruise for us. I thought it would... help him.",
            portrait: "wifeeyesclosed.PNG"
        })
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
                            <img src={`/images/characterModels/${this.state.portrait}`}/>
                        </div>
                        <div className="leftBox">
                            <div className="textBox">
                                <p>You go to the restaurant where the victim was last seen alive. There is another passenger here. She looks familiar...</p><br/>
                                <div>
                {this.state.dialogue}
                <br/><button onClick={this.lastNight}>Did you see the victim here last night?</button>
                <br/><button onClick={this.know}>What do you know about the victim?</button>
                <br/><button onClick={this.goodbye}>Thank you, miss. I will be on my way.</button>
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
            return dispatch({type: 'ADD_CLUE', payload: {clue: "Victim argued with wife"}})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HousekeepDialogue)