import { useEffect, useRef, useState } from "react";

function Meem() {
  const [me, setMe] = useState("");
  let them = useRef("sharif");
  useEffect(() => {
    them.current = them;
  });
  const showIt = () => {
    setMe(them.current.vaue);
  };

  return (
    <>
      <input
        ref={them}
        type="text"
        value={me}
        onChange={(e) => setMe(e.target.value)}
      />
      <button onClick={showIt}>After</button>
      <p>show me {me}</p>
    </>
  );
}
export default Meem;
