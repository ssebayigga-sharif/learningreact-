import { useState } from "react";

function Myform() {
  const [FirstName, SetFirstName] = useState("Nalumansi");
  const [LastName, setLastName] = useState("sharifah");
  const [contact, setContact] = useState("0760021334");
  return (
    <>
      <form>
        <label>
          FirstName :{" "}
          <input
            type="text"
            value={FirstName}
            onChange={(e) => SetFirstName(e.target.value)}
          ></input>
        </label>
        <br></br>
        <br></br>
        <label>
          LastName :{" "}
          <input
            type="text"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </label>
        <br></br>
        <br></br>
        <label>
          contact :{" "}
          <input
            type="number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          ></input>
        </label>
        <br></br>
        <br></br>
        <button>submit</button>
      </form>
    </>
  );
}

export default Myform;
