import List from "./List";
//if the value is shamim u break
function Hername() {
  const names = [
    "shakirah",
    "shamirah",
    "shamim",
    "shamrah",
    "hajarah",
    "habiibah",
  ];
  return (
    <>
      <h2>she is called !</h2>
      <ul>
        {names.map((her) => (
          <List nam={her} />
        ))}
      </ul>
    </>
  );
}

export default Hername;
