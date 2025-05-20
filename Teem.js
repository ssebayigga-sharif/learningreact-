import Team from "./Team";

function Teem() {
  const player = [
    "onana",
    "dalot",
    "mazraou",
    "maguire",
    "shaw",
    "de light",
    "yoro",
    "dorgu",
    "amass",
    "casemiro",
    "ugarte",
    "bruno",
    "garnacho",
    "zirkzee",
    "amad",
    "mount",
    "hojlund",
    "lindelof",
  ];

  return (
    <>
      <ol>
        {player.map((named) => (
          <Team players={named} />
        ))}
      </ol>
    </>
  );
}
export default Teem;
