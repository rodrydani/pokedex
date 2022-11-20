import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

  const [characterDetail, setCharacterDetail]=useState({});
 const { id }=useParams();
  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res)=>setCharacterDetail(res.data))
  },[id])
 console.log(characterDetail);
    return (
        <div>
            <h1>{characterDetail.name}</h1>
            <img src={characterDetail.sprites?.front_default} alt="" />
        </div>
    );
};

export default PokemonDetail;