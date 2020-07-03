import React, { Component } from 'react'
import './Window.css';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Item from './Item';
import Locations from './Locations';
import CrimeScene from './CrimeScene';
import Office from './Office';
import Restaurant from './Restaurant';
import CruiseDeck from './CruiseDeck';
import Pool from './Pool';

export class Window extends Component {
    
    render() {
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
                    <Route
                        exact
                        path="/cruisepool"
                        component={Pool}>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Window)
