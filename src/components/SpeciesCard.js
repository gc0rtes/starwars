import { Link } from "react-router-dom";
import "./Cards.css";

export default function SpeciesCard(props) {
  return (
    <div className="container">
      <div className="card">
        <h5>Name: {props.name} </h5>
        <h6>Specie id: {props.specieId}</h6>
        <Link to={`/species/${props.specieId}`}>Details</Link>
      </div>
    </div>
  );
}
