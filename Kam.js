//using the and operator to compare components
function Kam(props) {
  const fog = props.fog;
  return (
    <>
      <h1>call him</h1>
      {fog.length > 2 && <p> i love cars not so {fog.length}</p>}
    </> //in this case when the fog lenth equates to true the second statement appears
  );
}

export default Kam;
