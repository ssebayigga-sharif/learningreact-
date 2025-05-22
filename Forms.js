import { useState } from "react";

function Forms() {
  const [firstName, setfirstName] = useState("Ssebayigga");
  const [lastName, setLastName] = useState("sharif");
  console.log(lastName);
  return (
    <>
      <form>
        <label>
          First Name :{" "}
          <input
            type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          ></input>
        </label>
        <br></br>
        <br></br>
        <label>
          Last Name :{" "}
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </label>
        <br></br>
        <br></br>
        <button>submit</button>
      </form>
    </>
  );
}
export default Forms;
