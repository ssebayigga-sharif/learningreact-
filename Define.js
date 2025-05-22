/**we are going to have four html elements
 * an h2 , a paragraph a button and another paragraph
 * the content of the h2 is "show last paragraph" and the last paragraph should be seen
 * when u click the button the content of the h2 should change to "dont show last paragraph
 * and then the last paragraph should disappera"
 *
 */
import { useState } from "react";
function Define() {
  const [heading, setHeading] = useState("show last paragraph");
  const [firstParagraph, setFirstParagraph] = useState("i came first");
  const [secondParagraph, setSecondParagraph] = useState("i came second");
  const well = () => {
    setHeading("do not show last paragraph");
  };

  return (
    <>
      <h2>{heading}</h2>
      <p>{firstParagraph}</p>
      {heading == "show last paragraph" && <p>{secondParagraph}</p>}

      <button onClick={well}>changed</button>
    </>
  );
}
export default Define;
