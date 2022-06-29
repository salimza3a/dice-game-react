import React from "react";
import Die from './Die'
import './dice.css'
class RollDice extends React.Component {
    constructor () {
        super()

        this.state = {
            firstVal: "",
            secondVal: "",
            rolling: false,
            dices: ["one","two","three","four","five","six"]
        }
        this.roll = this.roll.bind(this)
    }
    roll() {
    const firstDiceVal = Math.floor(Math.random() * 6) ;
    const secondDiceVal = Math.floor(Math.random() * 6) ;
    this.setState({firstVal: this.state.dices[firstDiceVal], secondVal: this.state.dices[secondDiceVal], rolling: true,})
    console.log(firstDiceVal)
    console.log(secondDiceVal)

 setTimeout(() => {
      this.setState({rolling: false})
    }, 1000);
   
    }

    render () {

        return (
            <div className="container">
            <div className="wrapperDices">
            <Die  firstDice = {this.state.firstVal || this.props.diceOne} shakingDice ={this.state.rolling}/>
            <Die  secondDice = {this.state.secondVal || this.props.diceTwo } shakingDice ={this.state.rolling}/>
           
            </div>
            <button disabled={this.state.rolling} onClick={this.roll}>{this.state.rolling ? "Rolling..." : "Roll Dice!"}</button>
            </div>
        )
    }
}

RollDice.defaultProps = {
    diceOne: "one",
    diceTwo: "one",
}

export default RollDice