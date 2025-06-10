import { useContext } from "react";
import { userContext } from "./Years";

function May() {
  const car = useContext(userContext);
  return (
    <>
      <h6>month five is {car}</h6>
      <p>in the second week </p>
    </>
  );
}
export default May;
