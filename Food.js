function Food() {
  const myFood = [
    "rice",
    "cassava",
    "yams",
    "potatoes",
    "pumpkins",
    "matooke",
    "irish",
  ];
  return (
    <>
      {myFood.map((eat) => (
        <Food />
      ))}
    </>
  );
}
export default Food;
