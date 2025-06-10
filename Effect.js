import { useState } from "react";

function Effect() {
  const [it, setIt] = useState("football");
  return (
    <>
      <h2>i hate them</h2>
      <p>i love {it}</p>
    </>
  );
}
export default Effect;
