import { createContext } from "react";
import Two from "./Two";
import { days } from "./Weekend";

function One() {
  const name = createContext(days);
  return (
    <>
      <h2>number one</h2>
      <p>They will call {name}</p>
      <Two />
    </>
  );
}
export default One;
