import { createContext } from "react";
import Three from "./Three";
import { days } from "./Weekend";

function Two() {
  const name = createContext(days);
  return (
    <>
      <h3>number two </h3>
      <p>they will remember {name}</p>
      <Three />
    </>
  );
}
export default Two;
