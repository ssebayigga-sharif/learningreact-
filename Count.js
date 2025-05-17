// using the and operator

function Count(props) {
  const myCount = props.myCount;
  return (
    <>
      <p> he likes it when i count</p>
      {myCount.length > 3 && <h2>he bought {myCount.length} cars last year</h2>}
    </>
  );
}

export default Count;
