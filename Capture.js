import { useRef, useState } from "react";

function Capture() {
  const getMe = useRef();
  const burn = () => {
    console.log(getMe.current.value);
  };

  return (
    <>
      <label>
        Name : <input ref={getMe} />
      </label>
      <br></br>
      <button onClick={burn}>capture</button>
    </>
  );
}
export default Capture;
