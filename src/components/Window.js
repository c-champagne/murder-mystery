import React, { Component } from 'react'
import './Window.css';
import {Switch, Route, Link} from 'react-router-dom';

import Item from './Item';
import Locations from './Locations';
import CrimeScene from './CrimeScene';
import Office from './Office';
import Restaurant from './Restaurant';
import CruiseDeck from './CruiseDeck';

export class Window extends Component {

    constructor(props) {
        super(props);

        this.state= {
            clues: [],
            locations: [],
            suspects: [],
            facts: [] 
        }
    }
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
                    
                </Switch>
                <div className="controls">
                        <div className="locationList"><Locations/></div>
                        <div className="inventory">
                            <h2>Your Inventory</h2>
                            <ul>
                                <li><Item/></li>
                                <li><Item/></li>
                                <li><Item/></li>
                                <li><Item/></li>
                                <li><Item/></li>
                            </ul>
                        </div>
                </div>
                    
                
            </div>
        )
    }
}

export default Window
