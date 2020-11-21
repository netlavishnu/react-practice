import React, { Component } from 'react'

export default class Name extends Component {
    state ={
        name:"vishnu",
        
    }
    onClick =() => {
        // if(this.state.name == "vishnu"){
            //    this.setState({name:""}) 
            // } else {
                //     this.setState({name:'vishnu'})
                // }
                // this.state.name == "vishnu"?this.setState({name:""}):this.setState({name:'vishnu'})
            this.setState({name: this.state.name == "vishnu"?"":"vishnu"})
            } 
       render() {
        return (
            <div>
                <button onClick={this.onClick}> {this.state.name =="vishnu"?"hide":"show"}</button>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
