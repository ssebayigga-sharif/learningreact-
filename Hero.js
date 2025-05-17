function Hero() {
  const myHero = (sharif) => {
    alert(sharif + " is my favorite superhero");
  };

  return (
    <>
      <button onClick={() => myHero("Thor")}> myHero</button>
    </>
  );
}

export default Hero;
