import { memo } from "react";

function Run(props) {
  console.log(`i like runing every morning
        she likes challenging me daily`);
  return (
    <>
      <h1 style={{ backgroundColor: "bisque" }}>run</h1>
      <p style={{ backgroundColor: "goldenrod" }}>
        runing is my daily {props.usual}
      </p>
    </>
  );
}
export default memo(Run);
