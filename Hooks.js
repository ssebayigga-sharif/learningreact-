import { useState } from "react";
import React from "react";

function Hoo() {
  const [buys, setBuys] = useState("melon");
  return (
    <>
      <p>go and buy me a {buys}</p>
    </>
  );
}
export default Hoo;
