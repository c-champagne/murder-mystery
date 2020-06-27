import React, { Component } from 'react';
import './Item.css';



export class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clueName: "Test",
            Desc: "This is a clue."
        }
    }
    
    render() {
        return (
            <div className="Item">
                <h3>{this.state.clueName}</h3>
            </div>
        )
    }
}

export default Item

