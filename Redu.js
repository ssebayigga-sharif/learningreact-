import { useReducer } from "react";
// my initial state
const initialState = 20;

// my reducer function to set the current age conditionally
function reducer(state, action) {
  switch (action.type) {
    case "old":
      console.log("this person is has grown");
      break;
    case "youth":
      console.log("this person is yet to grow");
      break;
    case "young":
      console.log("this one is still a baby");
      break;
    default:
      console.log("we also dont know");
  }
}

function Aging() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>state</h1>

      <button onClick={() => dispatch({ type: "old" })}>show old</button>

      <button onClick={() => dispatch({ type: "youth" })}>show youth</button>

      <button onClick={() => dispatch({ type: "young" })}>show young</button>
    </div>
  );
}
export default Aging;
