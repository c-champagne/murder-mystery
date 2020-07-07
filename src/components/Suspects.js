import React, { Component } from 'react'
import {connect } from 'react-redux';
import './Item.css';

export class Suspects extends Component { 
    
    
    susWife = () => {
        this.props.addWife()
    }
    susActress = () => {
        this.props.addActress()
    }
    susPartner = () => {
        this.props.addPartner()
    }
    susHousekeeper = () => {
        this.props.addHousekeeper()
    }
    

    

    render() {
        const knowPerson = this.props.persons;

        function ListItem (props) {
            return <li>{props.value}</li>
        }
        return (
            <div className="textBG">
                <span className="controlTitle">Persons of Interest</span>
                   {this.props.persons.map((person)=> 
                   <ul>
                   <ListItem key={person} value={person}/></ul>
                    )}
                     {knowPerson.includes("Wife") ? <button className='addSuspectButton' onClick={this.susWife}>Add Wife to Suspects</button> : ''}
                     {knowPerson.includes("Actress") ? <button className='addSuspectButton' onClick={this.susActress}>Add Actress to Suspects</button> : ''}
                     {knowPerson.includes("Housekeeper") ? <button className='addSuspectButton' onClick={this.susHousekeeper}>Add Housekeeper to Suspects</button> : ''}
                     {knowPerson.includes("Partner") ? <button className='addSuspectButton' onClick={this.susPartner}>Add Partner to Suspects</button> : ''}
                <hr/>
                <span className="controlTitle">Your Suspects</span>
                <ul>
                {this.props.suspects.map((person)=> 
                   <ListItem key={person} value={person}/>
                    )}
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


const mapDispatchToProps = (dispatch) => {
    return {
        addWife: () => {    
            return dispatch({type: 'ADD_SUSPECT', payload: {suspects: "Wife"}})
        },
        addActress: () => {    
            return dispatch({type: 'ADD_SUSPECT', payload: {suspects: "Actress"}})
        },
        addHousekeeper: () => {    
            return dispatch({type: 'ADD_SUSPECT', payload: {suspects: "Housekeeper"}})
        },
        addPartner: () => {    
            return dispatch({type: 'ADD_SUSPECT', payload: {suspects: "Business Partner"}})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Suspects)
