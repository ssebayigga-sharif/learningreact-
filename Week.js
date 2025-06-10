import Monday from "./Monday";

function Week(props) {
  return (
    <>
      <h2>this is the week component</h2>
      <p>what is the day today</p>
      <p>all will what, {props.like}</p>

      <Monday like={props.yes} />
    </>
  );
}

export default Week;
