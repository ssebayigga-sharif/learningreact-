import { useEffect, useRef, useState } from "react";

function Track() {
  const [yesterday, setYesterday] = useState("Wednesday");
  const today = useRef("");
  useEffect(() => {
    today.current = yesterday;
  }, [yesterday]);
  return (
    <>
      <label>
        Tracking :
        <input
          type="text"
          value={yesterday}
          onChange={(e) => setYesterday(e.target.value)}
        />
      </label>
      <h1>current value {yesterday}</h1>
      <h2>previous value {today.current}</h2>
    </>
  );
}
export default Track;
