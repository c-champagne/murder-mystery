import React, { Component } from 'react'
import './Window.css';
import {Switch, 
        Route, 
        Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Item from './Item';
import Locations from './Locations';
import Suspects from './Suspects';
import CrimeScene from './CrimeScene';
import Office from './Office';
import Restaurant from './Restaurant';
import CruiseDeck from './CruiseDeck';
import Pool from './Pool';

export class Window extends Component {
    
    render() {

        const NoMatch = ({location}) => {
            return <div>
                <img src="/images/404splash.jpg" alt="splash"/>
                    <h4 style={{color:'white', paddingLeft: '3em'}}>404! You fell off the boat looking for {location.pathname}</h4>;
                    <span style={{color:'white', paddingLeft: '3em'}}><Link to="/">Go back to your office to dry off</Link></span>
                </div>
          }
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
                    <Route 
                        component={NoMatch}>
                    </Route>
                    
                </Switch>
                <div className="controls">
                    <img src="/images/MysteryatSeaLogo.png" alt="game logo"/>
                        <div className="locationList">
                            <Locations/>
                        </div>
                        <div className="inventory">
                            <Item/>
                        </div>
                        <div className="suspectList">
                            <Suspects/>
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
