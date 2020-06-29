import React, { Component } from 'react'

export class Dialogue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dialogue: "Oh, hello detective. I think I'm ready to answer questions now.",
            portrait: "wifeneutral.PNG"
        }
    }

    earring = () => {
        this.setState({
            dialogue: "Oh, yes.  I don't know if I lost it before or after... this happened.  Maybe one of the cleaning staff has seen it."
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
                                <p>You arrive at the crime scene.  The murder victim's wife is here.</p><br/>
                               
                                <span>WIFE: "Oh, it's you, detective. Have you seen my other earring?  "</span>
                        </div>
                    </div>


            <div>
                {this.state.dialogue}
                <button onClick={this.earring}>Click to ask earrings</button>
            </div>
            </div>
        )
    }
}

export default Dialogue
