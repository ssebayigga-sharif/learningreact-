function Change() {
  const changeMe = () => {
    alert("show me red");
  };
  const taken = () => {
    alert("ulcers ohhh");
  };
  return (
    <>
      <button onClick={changeMe}>to red</button>;<p onMouseOver={taken}>own</p>
    </>
  );
}

export default Change;
