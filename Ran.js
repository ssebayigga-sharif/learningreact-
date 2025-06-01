import { useState } from "react";
import Run from "./Run";
function Ran() {
  const [calling, setCalling] = useState("routine");
  const [show, setShow] = useState("count");
  const showing = () => {
    setShow("please stop the count");
  };
  //console.log(show);
  return (
    <>
      <Run usual={calling} />
      <h1 style={{ backgroundColor: "bisque" }}> show them</h1>
      <button
        onClick={showing}
        style={{
          color: "blue",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 10,
        }}
      >
        show
      </button>
    </>
  );
}
export default Ran;
