import React, { Component } from 'react'

export default class Counter extends Component {
     state = {
         count:4
     }

    onClick = (e) =>{
        this.setState({count: e.target.name == "increment"?this.state.count+1:this.state.count-1})
    }
       
    render() {
        // let count=3;
        return (
            <div>
               <button name="decrement" onClick={this.onClick}>decrement</button>
                <h1>{this.state.count}</h1>
                <button name="increment" onClick= {this.onClick}>increment</button>
            </div>
        )
    }
}
