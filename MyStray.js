import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";

//my initial state
const initialState = { color: "red" };
const ACTIONS = {
  BLACK: "black",
  GREEN: "green",
  NAME: "name",
};

//my reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.BLACK:
      console.log("his face is  black");
      break;
    case ACTIONS.GREEN:
      console.log("she puts on a green dress");
      break;
    case ACTIONS.NAME:
      console.log("Ssebayigga Sharif");
      break;
    default:
      console.log("yeah");
  }
}
//my component
function MyStray() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>come and see</h2>
      <button onClick={() => dispatch({ type: ACTIONS.BLACK })}>black</button>
      <button onClick={() => dispatch({ type: ACTIONS.GREEN })}>green</button>
      <button onClick={() => dispatch({ type: ACTIONS.NAME })}>name</button>
    </>
  );
}
export default MyStray;
