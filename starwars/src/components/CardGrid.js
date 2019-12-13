import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Alert } from 'reactstrap';

export default function CardGrid(){
const [characterName, setCharacterName]= useState('')
const [birthYear, setBirthYear] = useState('')
const [homeWorld, setHomeWorld]=useState([])
const [characterSpecies, setCharacterSpecies] = useState([])
const [characterFilms, setCharacterFilms] = useState([])

useEffect(()=>{
  axios
    .get(`https://swapi.co/api/people/1/`)
    .then(response=>{
        console.log(response.data)
        setCharacterName(response.data)
        })
    .catch(error =>{
        console.log(error);
        setCharacterName({
                name: "${characterName}",
                homeworld:"OOPS! ${characterName} lives somewhere but it's not on this page! Try Again!",
            })
            });
  }, [birthYear, homeWorld, characterFilms, characterSpecies ])

      return (
        <div className="container">
         <Alert color="secondary"onScroll={() => setBirthYear("birth_year")}>This page contains the birth year of your favorite Star Wars characters!</Alert>
         <Alert color="warning"onScroll={() => setHomeWorld("homeworld")}>It includes their homeworld information.</Alert>
         <Alert color="secondary"onScroll={() => setCharacterSpecies("species")}>It includes their species.</Alert>
         <Alert color="warning"onScroll={() => setCharacterFilms("films")}>It also includes all of their films!</Alert>
          <div className="entry">
             <CharacterCard birthYear={birthYear.birth_year} homeWorld={homeWorld.homeworld} characterFilms={characterFilms.films} characterSpecies={characterSpecies.species} />;
        
          </div>
        </div>
      );

    }
// console.log(`characterName`)
// console.log(characterName)