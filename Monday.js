import Update from "./Update";

function Monday(props) {
  //this paragraph should show only when the day is wed
  const day = "wednesday";
  return (
    <>
      <h3>this is the monday component</h3>
      {day === "wednesday" && <p>today is my birthday</p>}
      <p>i like them for sure , {props.like}</p>
      <Update name={props.like} />
    </>
  );
}

export default Monday;
