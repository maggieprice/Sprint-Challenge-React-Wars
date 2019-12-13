import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Alert } from 'reactstrap';

export default function CardGrid(){
const [data, setData]= useState([])
// const [birthYear, setBirthYear] = useState('')

useEffect(()=>{
  axios
    .get(`https://swapi.co/api/people/`)
    .then(res=>{
        console.log(res.data)
        setData(res.data.results)
        })

    .catch(error =>{
        console.log(error);
            });
        }, [])

    return (
        <div className="container">
            <Alert color="secondary">This page contains the birth year of your favorite Star Wars characters!</Alert>

            <Alert color="warning">It includes their homeworld information.</Alert>

            <Alert color="secondary">It includes their species.</Alert>

            <Alert color="warning">It also includes all of their films!</Alert>
            { data.map(name => {
            return (<CharacterCard x={name}/>)})}
        </div>  
        // </div>
    );
            }
