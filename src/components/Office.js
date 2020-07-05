import React, { Component } from 'react';
import './Window.css';
import {connect } from 'react-redux';
//import accuse from './Accuse';
class Office extends Component {

    constructor(props) {
        super(props)
        this.handleAccuseClick = this.handleAccuseClick.bind(this);
    }

handleAccuseClick(murderer) {
    alert(this.props.murderer);
}

accuse = (suspect) => {
    if (suspect === this.props.murderer[0]) {
        alert("You win!");
    }else {
        alert("You are wrong!")
        console.log(suspect)
        console.log(this.props.murderer[0])
    }
}

    render() {

        /* function accuse(suspect){
            alert(suspect);
            if (suspect === this.props.murderer) {
                alert("You win!");
            }else {
                alert("You are wrong!")
            }
        } */

         let AccuseJSX = () => {
            return (
                <div>
                    <h2>Are you ready to charge a suspect?</h2>
                    <div>
                        <button onClick={() => {this.accuse("Wife")}}>Accuse Wife</button>
                        <button onClick={() => {this.accuse("Actress")}}>Accuse Actress</button>
                        <button onClick={() => {this.accuse("Business Partner")}}>Accuse Business Partner</button>
                    </div>
                </div>
            );
        }


        const oneSuspect = this.props.suspects;
        return (
            <div>
            <div className="background">
                    <img src="/images/office.jpg" alt="office"/>
                </div>
                    <div className="dialogueBox">
                        <div className="speaker">
                            <img src="/images/characterModels/placeholder.PNG" alt="speaker"/>
                        </div>
                        <div className="leftBox">
                            <div className="textBox">
                             {oneSuspect[0] ? <AccuseJSX/>:  "You’re a detective on the cruise ship Beloved of the Seas.  What was supposed to be a relaxing vacation for you has quickly become more business than pleasure with the murder of one of the other passengers. Choose a location to begin your investigation."}   
                           
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