import React, { Component } from "react";

export default class Friends extends Component {
  state = {
    friends: ["vishnu", "vijay", "ramu", "hari", "guru"],
    i: 0,
  };
  Previous = () => {
    if (this.state.i > 0) {
      this.setState({ i: this.state.i - 1 });
    } else {
      this.setState({ i: this.state.friends.length - 1 });
    }
  };
  Next = () => {
    if (this.state.i < this.state.friends.length - 1) {
      this.setState({ i: this.state.i + 1 });
    } else {
      this.setState({ i: 0 });
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.Previous}>Previous</button>
        <h1>{this.state.friends[this.state.i]}</h1>
        <button onClick={this.Next}>Next</button>
      </div>
    );
  }
}
