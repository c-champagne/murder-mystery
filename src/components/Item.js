import React, { Component } from 'react';
import './Item.css';
import {connect } from 'react-redux';


export class Item extends Component {
    
    render() {
        function ListItem (props) {
            return <li className="clue">{props.value}</li>
        }
        return (
            <div className="item, textBG">
                <span className="controlTitle">Your Clues</span>
                {this.props.clues.map((person)=> 
                   <ul>
                   <ListItem key={person} value={person}/></ul>
                    )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {  
    return { 
        ...state 
    }
}

export default connect(mapStateToProps)(Item)

