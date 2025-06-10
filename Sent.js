import Send from "./Send";
import Thursday from "./Thursday";

function Sent(props) {
  // we can also pass objects
  const car = { name: "volvo", color: "red" };

  return (
    <>
      <h3>this is the sent component</h3>
      <p>his ride</p>
      <p>every component must have the {props.call}</p>
      <Send mod={car} />
      <Thursday sherri={props.call} />
    </>
  );
}

export default Sent;
