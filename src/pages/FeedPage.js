import { useState, useEffect } from "react";
import axios from "axios";
import MainCard from "../components/MainCard";

const FeedPage = () => {
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const planetsResponse = await axios.get(
          "https://www.swapi.tech/api/planets"
        );
        console.log("Planets response:", planetsResponse.data.results);
        setPlanets(planetsResponse.data.results);
        const speciesResponse = await axios.get(
          "https://www.swapi.tech/api/species"
        );
        console.log("Species response:", speciesResponse.data.results);
        setSpecies(speciesResponse.data.results);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []); //what is used for the second parameter of useEffect?

  return (
    <div>
      <div> Welcome to my Star Wars Feed Page</div>
      <h3>Here's a lovely list of Star Wars Planets</h3>
      {planets.map((article) => (
        <MainCard key={article.uid} id={article.uid} name={article.name} />
      ))}
      <h3>And a another graceful list of Star Wars Species </h3>
      {species.map((article) => (
        <MainCard key={article.uid} id={article.uid} name={article.name} />
      ))}
    </div>
  );
};

export default FeedPage;
