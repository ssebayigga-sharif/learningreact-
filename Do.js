import { useEffect, useState } from "react";

function Do() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, []); //the dependency helps the file to only rerender when there is a change made
  return (
    <>
      <h1>my useeffect hook</h1>
      <p>lets try it out today</p>
      <p>we are goimg to count {count}</p>
    </>
  );
}
export default Do;
