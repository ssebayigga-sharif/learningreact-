import { createContext } from "react";
import { days } from "./Weekend";

function Five() {
  const name = createContext(days);
  return (
    <>
      <h6>number six</h6>
      <p>they will sing {name}</p>
    </>
  );
}
export default Five;
