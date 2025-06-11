import { createContext } from "react";
import Five from "./Five";
import { days } from "./Weekend";

function Four() {
  const name = createContext(days);
  return (
    <>
      <h5>number five</h5>
      <p>they will pray for {name} </p>
      <Five />
    </>
  );
}
export default Four;
