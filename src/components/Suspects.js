import React, { Component } from 'react'
import {connect } from 'react-redux';

export class Suspects extends Component { 


    addSuspect = () => {
        this.props.addSuspect()
    }

    

    render() {

        function ListItem (props) {
            return <li>{props.value}</li>
        }
        return (
            
            <div>
                <h3>Persons of Interest</h3>
                   {this.props.persons.map((person)=> 
                   <div>
                   <ListItem key={person}
                            value={person}/>
                            <button>Test</button></div>
                    )}
                <br/>Suspects list here.
                <ul>
                {this.props.suspects.map((person)=> 
                   <ListItem key={person}
                            value={person}/>
                    )}
                </ul>
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
            return dispatch({type: 'ADD_CLUE', payload: {clue: "Movie contract"}})
        },
        updateClue: () => {    
            return dispatch({type: 'UPDATE_CLUE', payload: {clue: "Broken earring"}})
        },
        addSuspect: () => {    
            return dispatch({type: 'ADD_SUSPECT', payload: {suspect: "test"}})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Suspects)
