// export default function SpeciesCard(props) {
//   return (
//     <div>
//       <h5>Name (https://www.swapi.tech/api/species)</h5>
//       <p>classification (https://www.swapi.tech/api/species/2)</p>
//       <p>average_lifespan (https://www.swapi.tech/api/species/2)</p>
//       <p>homeworld (https://www.swapi.tech/api/species/2)</p>
//       <p>language (https://www.swapi.tech/api/species/2)</p>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

export default function SpeciesCard(props) {
  return (
    <div className="card">
      <h5>Name: {props.name} </h5>
      <h6>Specie id: {props.specieId}</h6>
      <Link to={`/species/${props.specieId}`}>Details</Link>
    </div>
  );
}
