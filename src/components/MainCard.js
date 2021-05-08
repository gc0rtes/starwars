/* <h5>Name (https://www.swapi.tech/api/planets)</h5>
      <p>Diameter in km (https://www.swapi.tech/api/planets/1)</p>
      <p>Population (https://www.swapi.tech/api/planets/1)</p>
      <p>Climate (https://www.swapi.tech/api/planets/1)</p>
      <p>Terrain (https://www.swapi.tech/api/planets/1)</p> */

export default function MainCard(props) {
  return (
    <div className="Article">
      <h5>Name: {props.name} </h5>
      <p>Id: {props.id}</p>
    </div>
  );
}
