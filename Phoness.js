function Phoness(props) {
  return (
    <>
      <p>i use {props.kind}</p>
    </>
  );
}

function Call() {
  const phones = [
    { id: 0, kind: "tecno" },
    { id: 1, kind: "iphone" },
    { id: 2, kind: "itel" },
    { id: 3, kind: "sasung" },
    { id: 4, kind: "lenovo" },
  ];
  return (
    <>
      {phones.map((talk) => (
        <Phoness key={talk.id} kind={talk.kind} />
      ))}
    </>
  );
}
export default Call;
