import { useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

const Character = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getPeopleInfo(params.id);
  }, []);

  return (
    <div className="container-fluid">
      <h1
        className="title"
        style={{ fontFamily: "fantasy", color: "yellow", margin: "auto" }}
      >
        {store.people.name}
      </h1>
      <hr className="line" style={{ color: "yellow", margin: "auto" }}></hr>

      <br />
      <div className="row justify-content-md-center">
        <div className="col-8">
          <img
            src="https://cdn.shopify.com/s/files/1/0190/5436/2724/articles/star_wars_personajes_800x.jpg?v=1616087475"
            className="img-fluid"
            alt="..."
            width="640"
            height="360"
            border="2px solid"
            style={{ color: "gray", borderRadius: "10px" }}
          />
        </div>
        <div className="col-4 font-weight-bolder text-light">
          <p>Height: {store.people.height}</p>
          <p>Mass: {store.people.mass}</p>
          <p>Hair: {store.people.hair_color}</p>
          <p>Skin Color: {store.people.skin_color}</p>
          <p>Eye Color: {store.people.eye_color}</p>
          <p>Birth year: {store.people.birth_year}</p>
          <p>Gender: {store.people.gender}</p>
          <p>Created: {store.people.created}</p>
          <p>Edited: {store.people.edited}</p>
        </div>
      </div>
    </div>
  );
};

export default Character;
