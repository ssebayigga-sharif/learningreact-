import Navigates from "./Navigates";
function Breed(props) {
  return (
    <>
      <Navigates />
      <li>the name of his breed is {props.model}</li>
    </>
  );
}
export default Breed;
