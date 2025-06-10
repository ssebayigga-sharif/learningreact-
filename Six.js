import { useState } from "react";
import Week from "./Week";

function Six() {
  const [sets, setSets] = useState("all will come");
  return (
    <>
      <h2> Six added together</h2>
      <Week yes={sets} />
    </>
  );
}
export default Six;
