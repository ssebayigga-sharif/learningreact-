import React, { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty array = function is created only once

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default Counter;
