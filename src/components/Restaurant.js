import React, { Component } from 'react';
import './Window.css';
class Restaurant extends Component {
    render() {
        return (
            <div>
            <div className="background">
                    <img src="/images/restaurant.jpg"/>
                </div>
                    <div className="dialogueBox">
                        <div className="speaker">
                            <img src="/images/characterModels/actressneutral.PNG"/>
                        </div>
                        <div className="leftBox">
                            <div className="textBox">
                                <p>You go to the restaurant where the victim was last seen alive. There is another passenger here.</p>
                                <span>ACTRESS: "Oh, hello detective! I thought you might want to know that last night, the victim and his wife were arguing profusely at dinner. I think they were arguing about money... not that I was eavesdropping or anything, they were THAT loud about it."  </span>
                            </div>
                        </div>
                    </div>
                    </div>
        )
    }
}

export default Restaurant;