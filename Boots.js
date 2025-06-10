import { createContext } from "react";
import { drink } from "./Bottles";

function Boots() {
  const val = createContext(drink);
  return (
    <>
      <h5>i love boots</h5>
      <p>they will all get {val}</p>
    </>
  );
}
export default Boots;
