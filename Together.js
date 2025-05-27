import { useState } from "react";
import Family from "./Family";
import Friends from "./Friends";
import { Outlet } from "react-router-dom";

function Together() {
  const [family, setFamily] = useState(false);
  const [friends, setFriends] = useState(false);

  const considerFamily = () => {
    setFamily(true);
    setFriends(false);
  };

  const considerFriends = () => {
    setFriends(true);
    setFamily(false);
  };

  return (
    <>
      <Family family={family} />
      <Friends friends={friends} />
      <button onClick={considerFamily}>family</button>
      <button onClick={considerFriends}>friends</button>

      <Outlet />
    </>
  );
}

export default Together;
