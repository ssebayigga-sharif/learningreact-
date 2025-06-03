import Kalika from "./Kalika";
function Kalikawe() {
  const Counting = [
    { id: 0, name: "Esther" },
    { id: 1, name: "Abdul" },
    { id: 2, name: "Shakur" },
    { id: 3, name: "Shakirah" },
    { id: 4, name: "Bashiirah" },
    { id: 5, name: "Suubi" },
    { id: 6, name: "Kuky" },
  ];
  return (
    <>
      {Counting.map((suubi) => (
        <Kalika key={suubi.id} name={suubi.name} />
      ))}
    </>
  );
}

export default Kalikawe;
