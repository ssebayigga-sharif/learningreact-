//using the ternary operator
import High from "./High";
import Low from "./Low";
function Live(props) {
  const best = props.best;

  return (
    <>
      <p> {best ? <High /> : <Low />}</p>
    </>
  );
}

export default Live;
