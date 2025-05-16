import Boys from "./Boys";
import Girls from "./Girls";

function Gender(props) {
  const goWith = props.goWith;

  if (goWith === true) {
    return <Boys />;
  } else {
    return <Girls />;
  }
}
//   return (
//     <div>
//       <p>choose between girls and boys</p>
//       <Boys />
//       <Girls />
//     </div>
//   );

export default Gender;
