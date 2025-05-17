function Event() {
  const myName = (a, b) => {
    alert(b.type + "  is the action");
  };
  return (
    <>
      <button onClick={(me) => myName("sharif", me)}>sharif</button>
    </>
  );
}

export default Event;
