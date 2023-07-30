const getState = ({setStore,getStore, getActions}) => {
    return {
        store: {
            people: {
                height:"",
                mass:"",
                hair_color:"",
                skin_color:"",
                eye_color:"",
                birth_year:"",
                gender:"",
                name:"",
                homeworld:"",
                url:""
            },
            listOfPeople: [],
            planet: {
                climate:"",
                diameter:"",
                gravity:"",
                name:"",
                orbital_period:"",
                population:"",
                residents: [],
                rotation_period:"",
                surface_water:"",
                terrain:"",
                url:""
            },
            listOfPlanets: [],
            vehicle: {
                model:"",
                vehicle_class:"",
                manufacturer:"",
                cost_in_credits:"",
                length:"",
                crew:"",
                passengers:"",
                max_atmosphering_speed:"",
                cargo_capacity:"",
                consumables:"",
                films:[],
                pilots:[],
                name:"",
                url:""
            },
            listOfVehicles: [],
        },
        actions: {
            getPeople: ()=>{
                fetch("https://www.swapi.tech/api/people",{
                    method: "GET",
                    headers:{"Content-Type":"application/json"}
                }).then((response)=> response.json()).then((data)=>setStore({listOfPeople: data.results})).catch((error)=>console.log(error))
            },
            getPlanet: ()=>{
                fetch("https://www.swapi.tech/api/planet",{
                    method: "GET",
                    headers:{"Content-Type":"application/json"}
                }).then((response)=> response.json()).then((data)=>setStore({listOfPlanets: data})).catch((error)=>console.log(error))
            },
            getVehicle: ()=>{
                fetch("https://www.swapi.tech/api/vehicles",{
                    method: "GET",
                    headers:{"Content-Type":"application/json"}
                }).then((response)=> response.json()).then((data)=>setStore({listOfVehicles: data})).catch((error)=>console.log(error))
            }
        }
    }
}

export default getState;