import { useState } from "react";

function Statement() {
  const [stated, setStated] = useState("i will try it out");
  return (
    <>
      <h2>use state</h2>
      <p>yes {stated}</p>
    </>
  );
}
export default Statement;
