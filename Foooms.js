import { useState } from "react";

function Foooms() {
  const [yourName, setYourName] = useState("Ssebayigga Sharif");
  const [contact, setContact] = useState("0760021334");
  const [email, setEmail] = useState("sharifsseba@gmail.com");
  return (
    <>
      <form>
        <label>
          Your Name : <input type="text" value={yourName}></input>
        </label>
        <br></br>
        <br></br>
        <label>
          Contact : <input type="number" value={contact}></input>
        </label>
        <br></br>
        <br></br>
        <label>
          email : <input type="email" value={email}></input>
        </label>
        <br></br>
        <br></br>
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Foooms;
