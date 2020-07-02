import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';

class Locations extends Component {
    
    render() {
        const knowRestaurant = this.props.locations;
        const oneClue = this.props.clues;


        return (
            <div>
                <ul>
                     <li><Link to="/crimescene">Go to crime scene</Link></li>
                     <li><Link to="/">Go to your office</Link></li>
                     {oneClue[0] ? <li><Link to="/cruisedeck">Wander around ship</Link></li> : ''}
                     {knowRestaurant[0] ? <li><Link to="/restaurant">Go to restaurant</Link></li> : ''}
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

export default connect (mapStateToProps)(Locations);