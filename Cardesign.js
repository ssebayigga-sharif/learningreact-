import { useState } from "react";
import "./Cardesign.scss";
function Cardesign() {
  const [car, setCar] = useState({
    color: "green",
    driver: "Sharif",
    tyres: "4",
    model: "new",
  });
  //updating state in an object
  //we only want to update the color of the car
  const objectUpdate = () => {
    setCar((previousState) => {
      return { ...previousState, color: "pink" };
    });
  };
  return (
    <>
      <h3 className="head">design my car</h3>
      <p className="pap">
        {car.driver} is the driver of that {car.color} {car.model} car with{" "}
        {car.tyres} wheels
      </p>
      <button onClick={objectUpdate} className="bat">
        updateObject
      </button>
    </>
  );
}
export default Cardesign;
