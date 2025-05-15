// olumu tukoowa
function Exhausted() {
  const tellHim = (almost) => {
    alert(
      almost +
        `
         buh we also dont care !!!`
    );
  };

  return (
    <div>
      <h1>information</h1>
      <p>they always ignore that</p>
      <button onClick={() => tellHim("he likes them than us")}>always</button>
    </div>
  );
}

export default Exhausted;
