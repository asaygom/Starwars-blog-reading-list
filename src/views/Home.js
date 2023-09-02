import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/context";
import Card from "../components/Card";

function Home(props) {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getPeople();
    actions.getPeopleInfo(params.id);
    actions.getPlanet();
    actions.getVehicle();
  }, []);
  return (
    <div className="App">
      <div className="py-2 card-bg">
        <h1 className="text-light">Characters</h1>
        <div className="container-fluid row justify-content-center m-0">
          {store.listOfPeople.map((people, index) => {
            return (
              <Card
                key={index}
                id={people.uid}
                name={people.name}
                gender={people.gender}
                homeworld={people.homeworld}
                route="people"
                img="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"
              />
            );
          })}
        </div>
      </div>
      <div className="py-2 card-bg">
        <h1 className="text-light">Vehicles</h1>
        <div className="container-fluid row justify-content-center m-0">
          {store.listOfVehicles.map((vehicle, index) => {
            return (
              <Card
                key={index}
                id={vehicle.uid}
                name={vehicle.name}
                route="vehicle"
                img="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"
              />
            );
          })}
        </div>
      </div>
      <div className="py-2 card-bg">
        <h1 className="text-light">Planets</h1>
        <div className="container-fluid row justify-content-center m-0">
          {store.listOfPlanets.map((planet, index) => {
            return (
              <Card
                key={index}
                id={planet.uid}
                name={planet.name}
                route="planet"
                img="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
