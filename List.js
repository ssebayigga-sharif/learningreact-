import List from "./Lists";
function Lists() {
  const myArray = [
    { id: 1, name: "ford" },
    { id: 2, name: "lafesta" },
    { id: 3, name: "spacio" },
    { id: 4, name: "legacy" },
    { id: 5, name: "mustang" },
  ];

  return (
    <>
      <h4>what have we got in our store</h4>

      <ol>
        {myArray.map((drive) => (
          <Lists key={List.id} name={List.name} />
        ))}
      </ol>
    </>
  );
}

export default Lists;
