import { useMemo, useState } from "react";

function K() {
  //our first conent in the state
  const [name, setName] = useState("before changing the content");
  //the function to change our content when call
  const change = () => {
    setName("after changing the content");
  };
  //the our use memo
  useMemo(() => {
    //this renders once and only rerenders when something in the state changes
    console.log("finally it can show up");
  }, []);
  return (
    <>
      <h1>use memo</h1>
      <p>show me how it works</p>
      <p>lets try it with a button changing our content</p>
      <p>{name}</p>
      <button onClick={change}>memo</button>
    </>
  );
}
export default K;
