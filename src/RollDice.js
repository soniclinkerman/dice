import React, {Component} from "react"
import Dice from "./Die";
import "./RollDice.css";


class RollDice extends Component{
    static defaultProps = {
        numbers: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props){
        super(props);
        this.state = {die1: "one", die2: "three", rolling: false}
        this.roll = this.roll.bind(this);
    }
    roll() {
        const newDie1 = this.props.numbers[
            Math.floor(Math.random() * this.props.numbers.length)
        ]
        const newDie2 = this.props.numbers[
            Math.floor(Math.random() * this.props.numbers.length)
        ]
        this.setState({die1: newDie1, die2: newDie2, rolling: true})

        setTimeout(()=>{
            this.setState({rolling:false});
        }, 1000)
            
        }
    render() {
        return(
            <div className="RollDice">
                <div className="RollDice-container">
                <Dice face={this.state.die1} rolling={this.state.rolling}/>
                <Dice face={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling...": "Roll"}
                    </button>
            </div>
        )
    }



}

export default RollDice








































// import React, {Component} from "react";
// import Die from "./Die";
// import "./RollDice.css";

// class RollDice extends Component{
//     static defaultProps = {
//         number: ["one","two", "three", "four", "five", "six"]
//     }
//     constructor(props) {
//         super(props);
//         this.state = {die1: "one", die2: "two", rolling: false};
//         this.roll = this.roll.bind(this);
//     }
//     roll() {
//         const newDie1 = this.props.number
//         [Math.floor(Math.random() * this.props.number.length)]

//         const newDie2 = this.props.number
//         [Math.floor(Math.random() * this.props.number.length)]
//         this.setState({die1: newDie1, die2: newDie2, rolling: true});

//         setTimeout(() => {
//             this.setState({rolling: false})
//             }, 1000)

//     }
//     render() {
//         return(
//             <div className="RollDice">
//                 <div className="RollDice-container">
//                 <Die face={this.state.die1} />
//                 <Die face={this.state.die2} />
//                 </div>

//                 <button onClick={this.roll}>
//                     {this.state.rolling ? "Rolling..." : "Roll Dice!"}

//                 </button>

//             </div>
//         )
//     }
// }

// export default RollDice