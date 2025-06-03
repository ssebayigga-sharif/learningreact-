import { useState } from "react";
//updating state in usestate hooks
function Update() {
  const [me, setMe] = useState("superman");
  //we use functins to update state in react

  const updateMe = () => {
    setMe("Thanos");
  };
  return (
    <>
      <h1>love</h1>
      <p>i really love {me}</p>
      <button onClick={updateMe}>update me</button>
    </>
  );
}
export default Update;
