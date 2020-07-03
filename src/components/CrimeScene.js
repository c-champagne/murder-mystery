import React, { Component } from 'react';
import './Window.css';
import {connect } from 'react-redux';
import Dialogue from './WifeDialogue'

class CrimeScene extends Component {

 /* componentDidMount() {
    this.props.addClue()
}  */



    render() {
        return (
            <div>
            <div className="background">
                    <img src="/images/bedroom.jpg" alt="bedroom" useMap="#bedroom"/>
                    <map name="bedroom">
                        <area shape="rect" coords="0, 0, 1680, 1020" alt="bed" href="#"/>
                    </map>
                </div>
                    <div className="dialogueBox">
                    <Dialogue/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CrimeScene)