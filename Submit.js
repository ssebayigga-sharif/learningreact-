import { useState } from "react";

function Submit() {
  const [name, setName] = useState("sharif");
  const mySubmit = (event) => {
    event.preventDefault();
    alert(`your name is ${name}`);
  };
  return (
    <>
      <form onSubmit={mySubmit}>
        <label>
          Name :{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <br></br>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default Submit;
