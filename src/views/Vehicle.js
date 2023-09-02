import { useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

const Vehicle = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getVehicleInfo(params.id);
  }, []);

  return (
    <div className="container-fluid">
      <h1
        className="title"
        style={{ fontFamily: "fantasy", color: "yellow", margin: "auto" }}
      >
        {store.vehicle.name}
      </h1>
      <hr className="line" style={{ color: "yellow", margin: "auto" }}></hr>
      <br />
      <div className="row justify-content-md-center">
        <div className="col-8">
          <img
            src="https://sm.ign.com/ign_es/screenshot/default/maxresdefault_3ddb.jpg"
            className="img-fluid"
            alt="..."
            width="640"
            height="360"
            border="2px solid"
            style={{ color: "gray", borderRadius: "10px" }}
          />
        </div>
        <div className="col-4 font-weight-bolder text-light">
          <p>Model: {store.vehicle.model}</p>
          <p>Length: {store.vehicle.length}</p>
          <p>Passengers: {store.vehicle.passengers}</p>
          <p>Capacity: {store.vehicle.cargo_capacity}</p>
          <p>Consumables: {store.vehicle.consumables}</p>
          <p>Crew: {store.vehicle.crew}</p>
          <p>Created: {store.vehicle.created}</p>
          <p>Edited: {store.vehicle.edited}</p>
        </div>
      </div>
    </div>
  );
};
export default Vehicle;
