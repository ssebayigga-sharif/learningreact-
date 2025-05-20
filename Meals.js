import Take from "./Take";
function Meals() {
  const food = ["rice", "irish", "potatoes"];
  return (
    <>
      <ul>
        {food.map((kuki) => (
          <Take meal={kuki} />
        ))}
      </ul>
    </>
  );
}

export default Meals;
