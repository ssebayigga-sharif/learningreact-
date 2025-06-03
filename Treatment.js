import Treat from "./Treat";
import styles from "./Treatment.module.css";

function Treatment() {
  const cures = ["panadol", "quinin", "cotam", "extradol", "septrine"];

  return (
    <>
      <p>i treat them using different cures</p>
      <ul>
        {cures.map((alright) => (
          <Treat medicine={alright} />
        ))}
      </ul>
    </>
  );
}

export default Treatment;
