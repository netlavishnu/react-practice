import React, { Component } from 'react';

export default class Input extends Component {
    state = {
        persons:[],
        value:"",
    };
    onInputChange = (e) => {
        this.setState({value:e.target.value})
        
    }
    onClick = () => {
        if(this.state.value===""){
            console.log("please enter fields" );
        }else{
            console.log(this.state.value);
            this.setState({ persons: [...this.state.persons,this.state.value]})
        this.setState({value:""})
         }
    }
    render() {
        return (
            <div>
            <div>
              <input onChange = {this.onInputChange} placeholder="Enter the name" value={this.state.value}></input>
                <button  onClick ={this.onClick}>click</button>
         </div>
         <div>
             {this.state.persons.map((person)=><h1>{person}</h1>)}
         </div>
            </div>
    
        )
    }
}
