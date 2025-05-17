function Maze() {
  const Runner = (h) => {
    // using parameters in react events
    alert(h);
  };

  return (
    <>
      <button onClick={() => Runner("Chris Hesmsworth")}>run</button>
    </>
  );
}

export default Maze;
