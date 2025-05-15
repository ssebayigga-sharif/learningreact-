import Score from "./Conditionals";
import Miss from "./Miss";
function Choose(props) {
  const scored = props.scored;
  if (scored === true) {
    return <Score />;
  } else {
    return <Miss />;
  }
  //   return (
  //     <div>
  //       <p>i am yet to know the result</p>;
  //       <Miss />
  //       <Score />
  //     </div>
  //   );
}

export default Choose;
