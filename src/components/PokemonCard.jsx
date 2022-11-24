import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgBall from "../assets/Pokeball-PNG-Free-Download.png"
const PokemonCard = ({url, type}) => {

    const [pokemon,setPokemon]=useState({});

    const backgrounds= { 
      fighting:" rgba(97, 145, 172, 0.705)",
     flying:"rgba(108, 150, 199, 0.762)",
     poison:" rgba(161, 118, 172, 0.728)",
     ground:" linear-gradient(to top, rgb(94, 86, 24), rgb(247, 242, 183)",
     rock:"linear-gradient(to top, rgb(84, 84, 84), rgb(193, 192, 192)",
     bug:" rgb(191, 193, 124)",
     ghost:"  rgb(87, 87, 81)",
     steel:" linear-gradient(to top, rgb(87, 87, 87),rgb(127, 177, 237)",
     fire:"   rgba(203, 103, 16, 0.728)",
     water:"linear-gradient(to top, rgb(105, 132, 250),rgb(6, 175, 237)",
     grass:"  rgba(0, 128, 0, 0.505)",
     electric:" rgb(227, 214, 125)",
     psychic:" rgb(96, 6, 232)",
     ice:"linear-gradient(to top, rgb(8, 198, 245),rgb(12, 116, 142)",
     dragon:"linear-gradient(to top, rgba(230, 216, 68, 0.813),rgb(111, 67, 9)",
     dark:" linear-gradient(to top, rgba(6, 6, 6, 0.813),rgb(94, 81, 64)",
     fairy:" linear-gradient(to top, rgba(180, 100, 176, 0.813),rgb(231, 201, 233)",
     unknown:"",
    shadow:"",
    }
    const defaultBackground = ' rgba(255, 255, 255, 0.642)';

    useEffect(()=>{
       axios.get(url)
       .then((res)=>setPokemon(res.data))
    },[])
    console.log(pokemon);
    return (
          <div style = {{background: backgrounds[(pokemon.types?.[0].type.name)] || defaultBackground }}  className='pokemon-card'>
            <Link to={`/pokemons/${pokemon.id}`}>
            <h1 style={{color:"black"}}>{pokemon.name}</h1>
            <ul className='card-list'>
              <li className='li-card'><b>Type</b>: {pokemon.types?.[0]?.type.name}{
                pokemon.types?.[1]?.type.name ?
                ", " 
                :
                " "
              }{
                pokemon.types?.[1]?.type.name ?
                pokemon.types?.[1]?.type.name
                :
                " "
              }

                 </li> 
                 <li className='li-card'><b>weight:</b>{pokemon.weight} Kg</li>
              <li className='li-card'><b>hp:</b>{pokemon.stats?.[0].base_stat} </li>
              <li className='li-card'><b>Attack:</b>{pokemon.stats?.[1].base_stat}</li>
              <li className='li-card'><b>Defense:</b>{pokemon.stats?.[2].base_stat}</li>
              <li className='li-card'><b>Speed:</b>{pokemon.stats?.[5].base_stat}</li>
            </ul>
            <div className='pokeCard-img-cont'>
               <img className='pokeCard-img' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            </div>
            </Link>
            <img className='imgBall' src={imgBall} alt="" />
            </div>
    );
};

export default PokemonCard;