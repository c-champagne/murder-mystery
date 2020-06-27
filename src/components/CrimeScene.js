import React, { Component } from 'react';
import './Window.css';
import {Switch, Route, Link} from 'react-router-dom';
import {connect } from 'react-redux';

class CrimeScene extends Component {

 componentDidMount() {
    this.props.addClue()
} 

    render() {
        return (
            <div>
            <div className="background">
                    <img src="/images/bedroom.jpg" alt="bedroom" usemap="#bedroom"/>
                    <map name="bedroom">
                        <area shape="rect" coords="0, 0, 1680, 1020" alt="bed" href="#"/>
                    </map>
                </div>
                    <div className="dialogueBox">
                        <div className="speaker">
                            <img src="/images/characterModels/wifeneutral.PNG"/>
                        </div>
                        <div className="leftBox">
                            <div className="textBox">
                                <p>You arrive at the crime scene.  The murder victim's wife is here.</p><br/>
                                <span>WIFE: "Oh, it's you, detective. Have you seen my other earring?  I can't remember if I saw it before or after... this happened.  Could you check with the housekeeper?"</span>
                            <div className="test">
                                Testing</div>
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
            return dispatch({type: 'ADD_CLUE', payload: {clue: "Missing earring"}})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrimeScene)