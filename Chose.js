import Animals from "./Animals";
import Birds from "./Birds";

function Chose(props) {
  const myChoice = props.myChoice;
  if (myChoice) {
    return <Animals />;
  } else {
    return <Birds />;
  }
  //   return (
  //     <>
  //       <p>we are going to chose one by one</p>
  //       <Birds />
  //       <Animals />
  //     </>
  //   );
}
export default Chose;
