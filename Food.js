import Navigates from "./Navigates";

function Food() {
  const myFood = [
    "rice",
    "cassava",
    "yams",
    "potatoes",
    "pumpkins",
    "matooke",
    "irish",
  ];
  return (
    <>
      <Navigates />
      {myFood.map((eat) => (
        <li>{eat}</li>
      ))}
    </>
  );
}
export default Food;
