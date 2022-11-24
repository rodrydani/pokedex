import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import loadImf from "../assets/simple_pokeball.gif";
import pokeLogo from "../assets/pokemon-logo.png";

const PokemonDetail = () => {

  const [characterDetail, setCharacterDetail]=useState({});
  const [loading, setLoading]=useState(true)

 const { id }=useParams();
  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res)=>setCharacterDetail(res.data))
  },[id])
 console.log(characterDetail);

 setTimeout(() => {
  setLoading(false)
}, 2000);
    return (
      <>
      {
        loading ?
        <div>
        <img className='pokeBallLoad' src={loadImf} alt="" />
      </div>
      :
        <div className='characterDetail'>
          <img className='poke-logoDetail' src={pokeLogo} alt="" />
          <div className='pokeBack-detail'>
             <img src={characterDetail.sprites?.other.dream_world.front_default} alt="" />
          </div>
         
            <h1>{characterDetail.name}</h1>
            <ul className='ul-detail'>
              <li className='li-card'><b>Type</b>: {characterDetail.types?.[0]?.type.name}{
                characterDetail.types?.[1]?.type.name ?
                ", " 
                :
                " "
              }{
                characterDetail.types?.[1]?.type.name ?
                characterDetail.types?.[1]?.type.name
                :
                " "
              }

                 </li> 
                 <li className='li-card'><b>weight:</b>{characterDetail.weight} Kg</li>
              <li className='li-card'><b>hp:</b>{characterDetail.stats?.[0].base_stat} </li>
              <li className='li-card'><b>Attack:</b>{characterDetail.stats?.[1].base_stat}</li>
              <li className='li-card'><b>Defense:</b>{characterDetail.stats?.[2].base_stat}</li>
              <li className='li-card'><b>Speed:</b>{characterDetail.stats?.[5].base_stat}</li>
            </ul>
           
           
        </div>
        }
        </>
    );
};

export default PokemonDetail;