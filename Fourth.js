import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";

// my initial state
const initialState = { man: "head" };

//my reducer function
function reducer(state, action) {
  switch (action.type) {
    case "woman":
      console.log(" the mother in the house");
      break;
    case "children":
      console.log("these are the off springs");
      break;
    case "man":
      console.log("head");
      break;
    default:
      console.log("i like music");
  }
}
//my component
function Fourth() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>family time</h1>
      <button onClick={() => dispatch({ type: "woman" })}>woman</button>
      <button onClick={() => dispatch({ type: "children" })}>children</button>
      <button onClick={() => dispatch({ type: "man" })}>man</button>
    </>
  );
}
export default Fourth;
