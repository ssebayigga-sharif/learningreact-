import { useState } from "react";

function Designed() {
  //we have used an object in the usestate hook to design my car
  const [car, setCar] = useState({
    model: "2444",
    color: "red",
    horsePowers: "1000",
  });
  return (
    <>
      <h2>love my ride</h2>
      <p>
        my {car.color} of model {car.model} has {car.horsePowers} horsepowers
      </p>
    </>
  );
}
export default Designed;
