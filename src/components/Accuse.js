import React from 'react'
import {connect } from 'react-redux';

function Accuse(suspect) {
        if (suspect === this.props.murderer) {
            alert("You win!");
        }else {
            alert("You are wrong!")
        }
    }

    const mapStateToProps = (state) => {  
        return { 
            ...state 
        }
    }
export default connect (mapStateToProps)(Accuse)
