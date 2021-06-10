import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
  const [planetDetail, setplanetDetail] = useState(null); // set null to handle  crash loading data
  const params = useParams();

  console.log("What is my router param?", params);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await axios.get(
          `https://www.swapi.tech/api/planets/${params.planetId}`
        );
        console.log("Planet detail response:", response.data.result.properties);
        setplanetDetail(response.data.result.properties);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchPlanet();
  }, []);

  // An if statement to handle crash loading data
  // If the state of planetDetail is false (null) show loading
  if (!planetDetail) {
    console.log("state of planetDetail is:", planetDetail);
    return <div>Loading....</div>;
  }

  return (
    <div>
      <h1>{planetDetail.name}</h1>
      <h2>Diameter: {planetDetail.diameter} km</h2>
      <h2>Population: {planetDetail.population}</h2>
      <h2>Climate: {planetDetail.climate}</h2>
    </div>
  );
};

export default DetailsPage;
