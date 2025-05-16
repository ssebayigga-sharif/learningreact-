import Beat from "./Beat";
import Forgive from "./Forgive";

function Should(props) {
  const choice = props.choice;
  return <>{choice ? <Beat /> : <Forgive />}</>;

  //   return (
  //     <>
  //       <p>what should we do with them</p>
  //       <Forgive />
  //       <Beat />
  //     </>
  //   );
}

export default Should;
