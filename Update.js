import { useState } from "react";
import Sent from "./Sent";
//updating state in usestate hooks
function Update(props) {
  const [me, setMe] = useState("superman");
  //we use functins to update state in react

  const updateMe = () => {
    setMe("Thanos");
  };
  return (
    <>
      <h1>this is the update component</h1>
      <p>i really love {me}</p>
      <p>i like using props in react, {props.name}</p>
      <button onClick={updateMe}>update me</button>
      <Sent call={props.name} />
    </>
  );
}
export default Update;
