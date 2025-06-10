import { createContext, useState } from "react";
import One from "./One";
export const book = createContext();
function June() {
  const [area, useArea] = useState("home");
  return (
    <>
      <book.Provider value={area}>
        <One area={area} />
      </book.Provider>
      <p>we are currently in june</p>
    </>
  );
}
export default June;
