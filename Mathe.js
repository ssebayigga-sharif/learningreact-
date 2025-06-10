import { useEffect, useRef, useState } from "react";

function Mathe() {
  const [no, setNo] = useState(" ");
  let count = useRef(1);
  useEffect(() => {
    count.current = count.current + 2;
  });
  return (
    <>
      <label>
        count :{" "}
        <input
          type="text"
          value={no}
          onChange={(e) => setNo(e.target.value)}
        ></input>
      </label>
      <p>we are counting from {count.current}</p>
    </>
  );
}
export default Mathe;
