import { useState, useContext, createContext } from "react";
import Jan from "./Jan";
import Feb from "./Feb";
import Mar from "./Mar";
import April from "./April";
import May from "./May";
export const userContext = createContext();

function Years() {
  const [car, setCar] = useState(`'they buy a car'`);
  return (
    <>
      <h1>Months collection</h1>
      <p>let us begin the count</p>
      <userContext.Provider value={car}>
        <Jan car={car} />
      </userContext.Provider>
    </>
  );
}
export default Years;
