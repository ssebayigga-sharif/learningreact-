//using the and operator to compare components
function Minor(props) {
  const mee = props.mee;
  return (
    <>{mee.length > 2 && <p>i love {mee.length} cause they are fast</p>}</>
  );
}

export default Minor;
