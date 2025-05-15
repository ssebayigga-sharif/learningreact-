//using parameters and arguments

function Came() {
  const Called = (m) => {
    alert(m);
  };

  return (
    <button onClick={() => Called("he is called sharif")}> my name</button>
  );
}

export default Came;
