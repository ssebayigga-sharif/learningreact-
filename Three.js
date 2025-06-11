import { createContext } from "react";
import Four from "./Four";
import { days } from "./Weekend";

function Three() {
  const name = createContext(days);
  return (
    <>
      <h4>number three</h4>
      <p>thye will talk about {name}</p>
      <Four />
    </>
  );
}
export default Three;
