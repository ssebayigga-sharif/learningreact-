import { useState } from "react";
import Primary from "./Primary";
import styles from "./Treatment.module.css";
function Joined() {
  console.log("yes");
  const [all, setAll] = useState("girls");
  const [him, setHim] = useState("comes");
  const me = () => {
    setHim("going");
  };
  return (
    <>
      <Primary gender={all} />
      <button
        onClick={me}
        style={{
          backgroundColor: "pink",
          fontFamily: "inherit",
          color: "black",
        }}
      >
        them
      </button>
    </>
  );
}
export default Joined;
