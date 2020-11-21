import React, { Component } from "react";
// import { table } from 'react-bootstrap';
export default class Persons extends Component {
  state = {
    personsList: [
      { name: "vijay", age: 22 },
      { name: "vishnu", age: 23 },
      { name: "ramu", age: 21 },
    ],
    name: "",
    age: "",
  };
  delete = (e) => {
    console.log(e.target.id);
    this.setState({
      personsList: this.state.personsList.filter(
        (p, i) => i !== Number(e.target.id)
      ),
    });
  };
  nameInput = (e) => {
    this.setState({ name: e.target.value });
  };
  ageInput = (e) => {
    this.setState({ age: e.target.value });
  };

  Submit = () => {
    if (this.state.value === "") {
      console.log("please enter fields");
    } else {
      console.log(this.state.value);
      this.setState({
        personsList: [
          ...this.state.personsList,
          { name: this.state.name, age: this.state.age },
        ],
      });
      this.setState({ name: "", age: "" });
    }
  };
  render() {
    return (
      <div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.nameInput}
          ></input>
          <label>Father Name:</label>
          <input
            type="number"
            placeholder="Enter age"
            value={this.state.age}
            onChange={this.ageInput}
          ></input>
          <button onClick={this.Submit}>Submit</button>
        </div>
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Sno</th>
                <th>name</th>
                <th>age</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.personsList.map((p, k) => (
                <tr>
                  <td>{k + 1}</td>
                  <td>{p.name}</td>
                  <td>{p.age}</td>
                  <td className="delete" id={k} onClick={this.delete}>
                    X
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div>
                            <input type="text" onChange={this.onInputChange} placeholder="Enter name" value={this.state.name}></input>
                            <input  type="age" placeholder="Enter age" value={this.state.age}></input>
                            <button onClick={this.Submit}>Submit</button>
                    
                </div> */}
        </div>
      </div>
    );
  }
}
