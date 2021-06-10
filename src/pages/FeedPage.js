import { useState, useEffect } from "react";
import axios from "axios";
import PlanetCard from "../components/PlanetCard";
import SpeciesCard from "../components/SpeciesCard";
import "./FeedPage.css";

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
      <h1>Star Wars Feed Page</h1>
      <h3>Here's a lovely list of Star Wars Planets</h3>
      <div className="map-container">
        {planets.map((planet) => (
          <PlanetCard
            key={planet.uid}
            planetId={planet.uid}
            name={planet.name}
          />
        ))}
      </div>

      <h3>And a another graceful list of Star Wars Species </h3>
      <div className="map-container">
        {species.map((specie) => (
          <SpeciesCard
            key={specie.uid}
            specieId={specie.uid}
            name={specie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
