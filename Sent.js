import Send from "./Send";

function Sent() {
  // we can also pass objects
  const car = { name: "volvo", color: "red" };

  return (
    <>
      <p>his ride</p>
      <Send mod={car} />
    </>
  );
}

export default Sent;
