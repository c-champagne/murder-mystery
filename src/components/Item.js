import React, { Component } from 'react'


class Item extends Component {
      constructor(props) {
        super(props);

         this.state = {
            Name: "None",
            Desc: "No item here"
        } 
    } 
    render() {
        return (
            <div className="Item">
                <h3>{this.state.name}</h3>
                <p>Item description</p>
            </div>
        )
    }
}

export default Item;
