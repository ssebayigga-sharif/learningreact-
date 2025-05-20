import Breed from "./Breed";

function Speed() {
  const ride = [
    { id: 0, model: "volvo" },
    { id: 1, model: "kia" },
    { id: 2, model: "legacy" },
    { id: 3, model: "mark x" },
    { id: 4, model: "prado" },
    { id: 5, model: "spacio" },
    { id: 6, model: "ford" },
  ];
  return (
    <>
      <h1>take a ride</h1>
      <ul>
        {ride.map((sharif) => (
          <Breed key={sharif.id} model={sharif.model} />
        ))}
      </ul>
    </>
  );
}
export default Speed;
