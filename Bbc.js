function Bbc() {
  const myName = (h) => {
    alert(h + "  is his name");
  };

  return (
    <>
      <p>i can call him whatever i want</p>
      <button onClick={() => myName(" kawiso")}>Him</button>
    </>
  );
}

export default Bbc;
