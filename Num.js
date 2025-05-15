//parameters still

function Num() {
  const known = (b) => {
    alert("he called him  " + b);
  };

  return (
    <>
      <p>no body knew him until our mouse moved over his button</p>
      <button onMouseOver={() => known("Mesach Ainebyonna")}>i know him</button>
    </>
  );
}

export default Num;
