//real content a p element with its content as the value of me and a button when u click tthe button
// the cntent of the paragraph cganges to the new what
import { useState } from "react";
function Buttoni() {
  const [me, setMe] = useState("sharifah");
  const change = () => {
    setMe("haniifah");
  };
  return (
    <>
      <p>{me}</p>
      <button onClick={change}>me</button>
    </>
  );
}
export default Buttoni;
