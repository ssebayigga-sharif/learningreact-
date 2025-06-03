function Magic() {
  const them = [
    "songs",
    "movies",
    "concerts",
    "hitlists",
    "lipsync",
    "cartoons",
  ];
  return (
    <>
      <h2>all in one</h2>
      <p>
        {them.map((each) => (
          <li>{each}</li>
        ))}
      </p>
    </>
  );
}
export default Magic;
