import { useEffect, useRef, useState } from "react";

function Purpose() {
  const [vara, setVara] = useState("sharif");
  const get = useRef(10);
  const getFocus = () => {
    get.current.focus();
  };
  console.log(vara);
  return (
    <>
      <label>
        Get all :
        <input
          type="text"
          value={vara}
          ref={get}
          onChange={(e) => setVara(e.target.value)}
        ></input>
      </label>
      <button onClick={getFocus}> get</button>
    </>
  );
}
export default Purpose;
