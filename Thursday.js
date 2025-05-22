/**
 * we are going to create a component of one h2 element with content' which animals are domestic'
 * we will have four paragraphs two mentioning domestic and two mentioning wild
 * and a button when clicked the h3 should be inline with the paragraph
 * when the content of the h3 says wild animals only the paragraphs with wild animals
 * and when the content of the h3 changes to domestic animals the paragraphs with domestic animals should show
 */

import { useState } from "react";

function Thursday() {
  const [domestic, setDomestic] = useState("domestic animals");
  const [paragraphOne, setParagraphOne] = useState("cows and goats");
  const [paragraphTwo, setParagraphTwo] = useState(
    "hyena , lions and elephants"
  );

  const chooseAnimal = () => {
    setDomestic("wild animals");
  };
  return (
    <>
      <h1>animals good for food</h1>
      <h3>{domestic}</h3>
      <p>{domestic === "domestic animals" && paragraphOne}</p>
      <p>{domestic === "wild animals" && paragraphTwo}</p>
      <button onClick={chooseAnimal}>animal</button>
    </>
  );
}
export default Thursday;
