import React, { Component } from 'react'
import './Window.css';
import {Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Item from './Item';
import Locations from './Locations';
import CrimeScene from './CrimeScene';
import Office from './Office';
import Restaurant from './Restaurant';
import CruiseDeck from './CruiseDeck';

export class Window extends Component {
    
    render() {
         /* const cluesJSX = this.props.clues.map ((clue, index) => {
            return <Item key={index} {...clue}/>
        }) */ 
        return (
            <div className="mainWindow">
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Office}/>
                    <Route
                        exact
                        path="/crimescene"
                        component={CrimeScene}>
                    </Route>
                    <Route
                        exact
                        path="/restaurant"
                        component={Restaurant}>
                    </Route>
                    <Route
                        exact
                        path="/cruisedeck"
                        component={CruiseDeck}>
                    </Route>
                    
                </Switch>
                <div className="controls">
                        <div className="locationList"><Locations/></div>
                        <div className="inventory">
                            <h2>Your Clues</h2>
                            <Item/>
                        </div>
                </div>
                    
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {  //
    return { 
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addClue: () => {    
            return dispatch({type: 'ADD_CLUE', payload: {clue: "Missing earring"}})
        },
        lose: () => {
            return dispatch({type: 'YOU_LOSE', payload: {points: 50}})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Window)
