import { useState } from "react";
import "./Found.scss";
import Table from "./Table";
function Found() {
  const [loggedIn, setLoggedIn] = useState("Administrator");
  const admin = () => {
    setLoggedIn("Administrator");
  };
  const used = () => {
    setLoggedIn("User");
  };
  return (
    <>
      <h2 className="it">every ones activity</h2>
      <p className="p">i am bringing them to tell me their activities</p>
      <p className="p">so every body should listen carefully</p>
      <p>{loggedIn === "Administrator" && <Table />}</p>
      <button onClick={used}>show user</button>
      <button onClick={admin}>Admin</button>
    </>
  );
}
export default Found;
