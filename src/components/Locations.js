import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';

class Locations extends Component {
    render() {
        return (
            <div>
                <ul>
                     <li><Link to="/crimescene">Go to crime scene</Link></li>
                     <li><Link to="/restaurant">Go to restaurant</Link></li>
                     <li><Link to="/cruisedeck">Wander around ship</Link></li>
                </ul>
            </div>
        )
    }
}

export default Locations;