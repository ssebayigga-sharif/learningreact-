// react class constructor component
import "./Vehicle.css";
import React from "react";
class Vehicle extends React.Component {
  constructor() {
    super();
    this.called = { name: "volvo" };
  }

  render() {
    return <h2>her cars name is {this.called.name}</h2>;
  }
}

export default Vehicle;
