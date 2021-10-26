import React from "react";
import '../styles/counter.css'

class Counter extends React.Component {

    constructor(){
        
        super()

        // this.state = {
        //     count : 0,
        // };
    }

    // handlePlus = () => {
    //     // console.log(this.state.count);
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    // }

    // handleLess = () => {
    //     if(this.state.count > 0){
    //         this.setState({
    //             count : this.state.count - 1
    //         })
    //     }
    // }

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
export default Counter;