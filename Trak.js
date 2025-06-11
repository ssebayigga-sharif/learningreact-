import { useEffect, useRef, useState } from "react";

function Trak() {
  const [myName, setMyName] = useState("Ssebayigga Sharif");
  const changing = useRef("");
  useEffect(() => {
    changing.current = myName;
  }, []);
  return (
    <>
      <label>
        Previously :{" "}
        <input
          type="text"
          ref={changing}
          value={myName}
          onChange={(e) => setMyName(e.target.value)}
        />
      </label>
      <h2>my current Name is {myName}</h2>
      <h1>my previous name was {changing.current}</h1>
    </>
  );
}
export default Trak;
