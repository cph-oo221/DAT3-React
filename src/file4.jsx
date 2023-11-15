import React, { useState, useEffect } from "react";

function JokeComponent() {
  // State to store the joke
  const [joke, setJoke] = useState("");
  const [lastFetchTime, setLastFetchTime] = useState(null);

  // useEffect to fetch the joke
  useEffect(() => {
    fetchJoke();
  }, []); // Empty dependency array means this runs once on mount

  function hanleClick() {
    const now = new Date().getTime();
    if (lastFetchTime && now - lastFetchTime < 10000) {
      console.log("Wait for 10 seconds before fetching a new joke");
      return;
    }
    setLastFetchTime(now);
    fetchJoke();
  }

  const fetchJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setJoke(data.value))
      .catch((error) => console.error("Error fetching joke:", error));
  };

  return (
    <div>
      <p>{joke}</p>
      <button onClick={hanleClick}>Get new joke</button>
    </div>
  );
}

export default JokeComponent;
