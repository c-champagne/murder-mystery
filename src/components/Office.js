import React, { Component } from 'react';
import './Window.css';
import {connect } from 'react-redux';
class Office extends Component {

accuse = (suspect) => {
    if (suspect === this.props.murderer[0]) {
        alert("You caught the murderer! Nice work, detective!");
    }else {
        alert("You are wrong! This person is innocent.")
        console.log(suspect)
        console.log(this.props.murderer[0])
    }
}

    render() {
        
         let AccuseJSX = () => {
            return (
                <div>
                    <h2>Are you ready to charge a suspect?</h2>
                    <div>
                        <button className="accuseButton" onClick={() => {this.accuse("Wife")}}>Accuse Wife</button>
                        <button className="accuseButton" onClick={() => {this.accuse("Actress")}}>Accuse Actress</button>
                        <button className="accuseButton" onClick={() => {this.accuse("Business Partner")}}>Accuse Business Partner</button>
                    </div>
                </div>
            );
        }

        let IntroJSX = () => {
            return (
                <div>
                    <p>You’re a detective on the cruise ship, Mystery of the Seas. What was supposed to be a relaxing vacation for you has quickly become more business than pleasure with the murder of one of the other passengers. You've set up this room as a makeshift office.</p>
                    <p>Late last night, Mr. Everett Austin, a wealthy business investor, was found dead in his room from a single gunshot wound. His body was discovered by his wife, Mrs. Veronika Austin. At the time, Mrs. Austin was too distraught to answer questions.</p>
                    <p>It is morning now and you are ready to return to the crime scene and begin your investigation in full. When you are ready to charge a suspect, return to your office.</p>
                </div>
            )
        }


        const oneSuspect = this.props.suspects;
        return (
            <div>
            <div className="background">
                    <img src="/images/office.jpg" alt="office"/>
                </div>
                    <div className="dialogueBox">
                        <div className="speaker">
                            <img src="/images/characterModels/detective.PNG" alt="speaker"/>
                        </div>
                        <div className="leftBox">
                            <div className="textBox">
                             {oneSuspect[0] ? <AccuseJSX/> : <IntroJSX/>}   
                           
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
        },
        addLocation: () => {    
            return dispatch({type: 'ADD_LOCATION', payload: {location: "Restaurant"}})
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Office);