function And(props) {
  const sharif = props.cars;
  return (
    <>
      <h1>garage</h1>
      {sharif.length > 0 && <h2>we have {sharif} in our garage</h2>}
    </>
  );
}

export default And;
