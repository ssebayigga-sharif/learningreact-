// using the state keyword to create objects in react
// with the class components we have to import   react as the first step
import React from "react";
class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // with the state object we can use as many properties as we want
      color: "gold",
      shape: "star",
      role: "light",
    };
  }

  // we can change the object properties using the setstate method below
  changeColor = () => {
    this.setState({ color: "grey" }); // this changes the star color from gold to grey
  };
  render() {
    return (
      // this div enables us to write morethan one html element in one component
      <div>
        <p>it is {this.state.color} colored</p>
        <p> it has a {this.state.shape} shape</p>
        <p> it produces {this.state.role} during the night</p>
        <p> the above are some of the properties of a star described</p>
      </div>
    );
  }
}

export default Star;
