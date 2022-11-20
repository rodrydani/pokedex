import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgBall from "../assets/Pokeball-PNG-Free-Download.png"
const PokemonCard = ({url}) => {

    const [pokemon,setPokemon]=useState({});

    const backgrounds= { 
      fighting:" rgb(97, 144, 172)",
     flying:"rgb(108, 151, 199)",
     poison:" rgb(161, 118, 172)",
     ground:" linear-gradient(to top, rgb(94, 86, 24), rgb(247, 242, 183)",
     rock:"linear-gradient(to top, rgb(84, 84, 84), rgb(193, 192, 192)",
     bug:" rgb(191, 193, 124)",
     ghost:"  rgb(87, 87, 81)",
     steel:" linear-gradient(to top, rgb(87, 87, 87),rgb(127, 177, 237)",
     fire:" rgb(210, 126, 29)",
     water:"linear-gradient(to top, rgb(105, 132, 250),rgb(6, 175, 237)",
     grass:" rgb(34, 138, 34)",
     electric:" rgb(227, 214, 125)",
     psychic:" rgb(96, 6, 232)",
     ice:"linear-gradient(to top, rgb(8, 198, 245),rgb(12, 116, 142)",
     dragon:"linear-gradient(to top, rgba(230, 216, 68, 0.813),rgb(111, 67, 9)",
     dark:" linear-gradient(to top, rgba(6, 6, 6, 0.813),rgb(94, 81, 64)",
     fairy:" linear-gradient(to top, rgba(180, 100, 176, 0.813),rgb(231, 201, 233)",
     unknown:"",
    shadow:"",
    }
    const defaultBackground = ' white';

    useEffect(()=>{
       axios.get(url)
       .then((res)=>setPokemon(res.data))
    },[])
    console.log(pokemon);
    return (
          <div style = {{background: backgrounds[(pokemon.types?.[0].type.name)] || defaultBackground }}  className='pokemon-card'>
            <Link to={`/pokemons/${pokemon.id}`}>
            <h1>{pokemon.name}</h1>
            <img className='pokeCard-img' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            </Link>
            <img className='imgBall' src={imgBall} alt="" />
            </div>
    );
};

export default PokemonCard;