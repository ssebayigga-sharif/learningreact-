import { memo } from "react";
function Counted(props) {
  console.log("this component has been re rendered");
  return (
    <>
      <p> our cout was from {props.cout}</p>
    </>
  );
}
export default memo(Counted);
