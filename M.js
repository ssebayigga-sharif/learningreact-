import { useMemo, useState } from "react";

function M() {
  const [kam, setKam] = useState("we are trying the usememo");
  const Mem = () => {
    setKam("we are here");
  };
  console.log(Mem);
  useMemo(() => {
    console.log("i will go to Jamaica");
  }, [kam]);
  return (
    <>
      <h1>use memo</h1>
      <p>we are going to try the use memo</p>
      <button onClick={Mem}>try memo</button>
    </>
  );
}
export default M;
