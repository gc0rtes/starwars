import { Link } from "react-router-dom";

export default function PlanetCard(props) {
  return (
    <div className="card">
      <h5>Name: {props.name} </h5>
      <h6>Planet id: {props.planetId}</h6>
      <Link to={`/details/${props.planetId}`}>Details</Link>
    </div>
  );
}
