import React from "react";
// class Sharif extends React.Component {
//   constructor() {
//     super();
//     this.looks = { color: "red" };
//   }
//   render() {
//     return (
//       <>
//         <h3>sharif has {this.looks.color} eyes</h3>;
//         <p>why do you think makes sharif a good or a bad person</p>
//         <h1>come !</h1>
//       </>
//     );
//   }
// }

// using props in the constructor

class Sharif extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>i like eating {this.props.food}</p>;
  }
}
export default Sharif;
