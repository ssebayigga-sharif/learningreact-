function Enjoyed(props) {
  const game = "programming"; // we can also pass variable names in curly braces
  return (
    <>
      <p>i love {game}</p>
      <h1> {game} </h1>
      <h2>{game}</h2>
      <h3>{game}</h3>
      <h4>{game}</h4>
      <h5>{game}</h5>
      <h6>{game}</h6>
    </>
  );
} // with jsx we can wriite javascrpt code inside html elements
export default Enjoyed;
