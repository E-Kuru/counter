import React from 'react';

import './App.css';

import Counter from './components/Counter';
import CounterV2 from './components/CounterV2';

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      counter : 0,
      newCounter : 1
    }
  }

  handleIncrement = () => {
    if(this.state.counter < 100){
        if(this.state.counter === this.state.newCounter -1){
            this.setState({
            counter : this.state.counter + 1,
            newCounter : this.state.newCounter + 1,
          })  
        }
        else{
          this.setState({
            counter : this.state.counter + 1
          })
        }
    }
  }

  handleSubstract = () => {
    if(this.state.counter > 0){
      this.setState({
        counter : this.state.counter - 1
      })
    }
  }

  handlePlus = () => {
    if(this.state.newCounter < 100){
      this.setState({
        newCounter : this.state.newCounter + 1
      })
    }
  }

  handleLess = () => {
    if(this.state.newCounter > 1){
      if(this.state.counter === this.state.newCounter -1){
        this.setState({
          counter : this.state.counter - 1,
          newCounter : this.state.newCounter - 1,
        })  
    }
      else{
        this.setState({
          newCounter : this.state.newCounter - 1
        })
      }
    }
  }


  render(){
    return (
      <>
      <Counter   count={this.state.counter} increment={this.handleIncrement} substract={this.handleSubstract}/>
      <CounterV2 count={this.state.newCounter} increment={this.handlePlus} substract={this.handleLess}/>
      </>
     );
   
  }
}

export default App;
