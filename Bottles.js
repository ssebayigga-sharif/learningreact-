import { useState, createContext } from "react";
import Bot from "./Bot";
export const drink = createContext();

function Bottles() {
  const [val, setVal] = useState(" a drink");
  return (
    <>
      <h1>i love bottles</h1>
      <p>they will all get </p>
      <drink.Provider value={val}>
        <Bot val={val} />
      </drink.Provider>
    </>
  );
}
export default Bottles;
