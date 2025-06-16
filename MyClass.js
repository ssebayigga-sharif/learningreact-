import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";

//my initial state
const initialState = { students: 0 };
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

//my reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { students: state.students + 1 };
    case ACTIONS.DECREMENT:
      return { students: state.students - 1 };
    case "reset":
      return { students: 0 };
  }
}
//my component
function School() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>counting our students {state.students}</h1>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
    </div>
  );
}
export default School;
