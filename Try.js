function Try() {
  const shoot = (b, y) => {
    alert(y.type);
  };
  const cookies = (x) => {
    alert(x);
  };
  return (
    <div>
      <button onClick={(kuky) => shoot("kuki and her laptop", kuky)}>
        teken
      </button>
      ;<p onMouseOver={() => cookies("bambi my laptop")}>sharif is a bully</p>
    </div>
  );
}

export default Try;
