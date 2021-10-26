import React from "react";
import '../styles/counter.css'

class CounterV2 extends React.Component {

    constructor(){
        
        super()

    }

    render (){
        return (
            <>
            <h1>Counter</h1>
            <h2>{this.props.count}</h2>
            <br />
            <button onClick={this.props.substract} className='less'>-</button>
            <button onClick={this.props.increment} className='incre'>+</button>
            </>
        )
    }
}
export default CounterV2;