import { memo } from "react";

function Primary(props) {
  console.log(`we have many students
        local and international
        black and white`);
  return (
    <>
      <p
        style={{
          fontFamily: "cursive",
          backgroundColor: "brown",
          color: "black",
          fontSize: 40,
        }}
      >
        we have boys and {props.gender}
      </p>
    </>
  );
}
export default memo(Primary);
