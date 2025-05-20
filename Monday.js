function Monday(props) {
  //this paragraph should show only when the day is wed
  const day = "wednesday";
  return <>{day === "wednesday" && <p>today is my birthday</p>}</>;
}

export default Monday;
