import { createContext, useState } from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
export const days = createContext();
function Weekend() {
  const [name, setName] = useState(" Sharif");

  return (
    <>
      <h1> !!!!Them all</h1>
      <p>we are bringing some friends</p>
      <days.Provider value={name}>
        <One ko={name} />
      </days.Provider>
      <h1> !!!!!!!!!!!! Graduation !!!!!!!!!!</h1>
    </>
  );
}
export default Weekend;
