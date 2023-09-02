import { useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

const Planet = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getPlanetInfo(params.id);
  }, []);

  return (
    <div className="container-fluid">
      <h1
        className="title"
        style={{ fontFamily: "fantasy", color: "yellow", margin: "auto" }}
      >
        {store.planet.name}
      </h1>
      <hr className="line" style={{ color: "yellow", margin: "auto" }}></hr>
      <br />
      <div className="row justify-content-md-center">
        <div className="col-8">
          <img
            src="https://rollingstone.uol.com.br/media/_versions/star-wars-death-star-earth_1_widelg.jpg"
            className="img-fluid"
            alt="..."
            width="640"
            height="360"
            border="2px solid"
            style={{ color: "gray", borderRadius: "10px" }}
          />
        </div>
        <div className="col-4 font-weight-bolder text-light">
          <p>Rotation Period: {store.planet.rotation_period}</p>
          <p>Orbital Period: {store.planet.orbital_period}</p>
          <p>Diameter: {store.planet.diameter}</p>
          <p>Climate: {store.planet.climate}</p>
          <p>Gravity: {store.planet.gravity}</p>
          <p>Terrain: {store.planet.terrain}</p>
          <p>Surface Water: {store.planet.surface_water}</p>
          <p>Population: {store.planet.population}</p>
        </div>
      </div>
    </div>
  );
};

export default Planet;
