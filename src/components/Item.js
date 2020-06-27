import React, { Component } from 'react';
import './Item.css';
import {connect } from 'react-redux';


export class Item extends Component {
    /* constructor(props) {
        super(props);

        this.state = {
            clueName: "Test",
            Desc: "This is a clue."
        }
    } */
    
    render() {
        return (
            <div className="Item">
                <h3>{this.props.clues[0]}</h3>
                <h3>{this.props.clues[1]}</h3>
                <h3>{this.props.clues[2]}</h3>
                <h3>{this.props.clues[3]}</h3>
                <h3>{this.props.clues[4]}</h3>
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

