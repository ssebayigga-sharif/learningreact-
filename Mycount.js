import { useState } from "react";
import Counted from "./Counted";
function Mycount() {
  const [yeah, setYeah] = useState(0);
  const [counting, setCounting] = useState(0);
  const calculateCounting = () => {
    setCounting(7);
  };
  console.log(counting);
  return (
    <>
      <Counted cout={yeah} />
      <button onClick={calculateCounting}>+</button>
    </>
  );
}
export default Mycount;
