import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";

function Home(props){
    const { store, actions } = useContext(Context);
    useEffect(()=>{actions.getPeople()},[])
    return(
        <div className="App">
            <Navbar/>
            <div className='py-2  card-bg'>
                {console.log(store.listOfPeople)}
            {store.listOfPeople.map((people,index)=>{
                return <Card key={index} id={people.uid} name={people.name} gender="{people.result.properties.gender}" homeworld="{people.result.properties.homeworld}" img="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"/>})}
            </div>
    
        </div>
    )
}

export default Home;