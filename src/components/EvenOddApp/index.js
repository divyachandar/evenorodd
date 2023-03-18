import {Component} from "React"

import "./index.css"

class EvenOddApp extends Component{
state={count:0}

getRandomNumber=()=>Math.ceil(Math.random()*100)

onIncrement=()=>{
const randomNumber=this.getRandomNumber()

this.setState((prevState)=>({count:prevState.count+randomNumber}))
}

render(){
    const {count}=this.state;
    return(    
    <div className="app-container">
        <div className="evenOdd-container">
            <h1 className="header">Count {count}</h1>
            <p className="description">Count is {count%2===0?'Even':'Odd'}</p>
            <button className="increment-btn" type="button" onClick={this.onIncrement}>Increment</button>
            <p className="terms">Increase By Random Number Between 0 to 100</p>
</div>
</div>
)
}
}
export default EvenOddApp
