import React, { useState, useEffect } from "react";

function JokeComponent() {
  // State to store the joke
  const [joke, setJoke] = useState("");

  // useEffect to fetch the joke
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value))
      .catch((error) => console.error("Error fetching joke:", error));
  }, []); // Empty dependency array means this runs once on mount

  // Render the joke

  function hanleClick() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value))
      .catch((error) => console.error("Error fetching joke:", error));
  }

  return (
    <div>
      <p>{joke}</p>
      <button onClick={hanleClick}>Get new joke</button>
    </div>
  );
}

export default JokeComponent;
