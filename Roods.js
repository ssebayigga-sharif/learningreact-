import Roads from "./Roads";

function Roods() {
  const whichOne = [
    { id: 0, way: "masaka" },
    { id: 1, way: "mbarara" },
    { id: 2, way: "jinja" },
    { id: 3, way: "hoima" },
    { id: 4, way: "luweero" },
    { id: 5, way: "mubende" },
  ];

  return (
    <>
      <h2>lets take the shortest root</h2>
      <ul>
        {whichOne.map((wayUsed) => (
          <Roads keys={wayUsed.id} way={wayUsed.way} />
        ))}
      </ul>
    </>
  );
}
export default Roods;
