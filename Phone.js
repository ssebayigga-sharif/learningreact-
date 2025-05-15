// using the props
function Phone(props) {
  return <h1>i will buy her an {props.called}</h1>;
}

function Taken() {
  const phoneName = "iphone"; // we can use a variable to create the property in react
  return (
    <>
      <p>she stole her phone yesterday buh</p>
      <Phone called={phoneName} />
    </>
  );
}

export default Taken;
