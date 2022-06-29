import React from "react";
import './dice.css'
class Die extends React.Component {
  
    render () {

        console.log(this.props.shakingDice)
        console.log(this.props.shakingDice)
        return (
            <div className="diceContainer">
                <i className={` color-icon fa-7x fa-solid fa-dice-${this.props.firstDice} ${this.props.shakingDice && "shaking" }`}></i>
           <i className={` fa-7x fa-solid fa-dice-${this.props.secondDice} ${this.props.shakingDice && "shaking" }`}></i>
            </div>
        )
    }
}

export default Die