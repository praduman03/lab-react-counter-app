import React, { Component } from 'react'
import '../App.css'

export default class counter extends Component {
  constructor(props){
    super(props)
    this.state={
      count:0 
    }
  }

addition(){
      this.setState({count:this.state.count +1})
}
subtraction(){
    this.setState({count:this.state.count-1})
}
reset(){
  this.setState({count:this.state.count*0})
}


  
  render(){
    return (
      <div>
        <h1>Counter App</h1>
        <span className='no'>{this.state.count}</span><br/>
        <div className='flex'>
        <button className='add' onClick={()=>this.addition()}>+</button>
        <button className='reset' onClick={()=>this.reset()}>Reset</button>
        <button className='sub' onClick={()=>this.subtraction()}>-</button>
        </div>
      </div>
    )
  }
  
}
