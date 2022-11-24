import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import axios from "axios";
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import loadImf from "../assets/simple_pokeball.gif";
const Pokemons = () => {

    const userName=useSelector(state=>state.name)
    const [pokemon, setPokemon]=useState([]);
    const [pokemonName, setPokemonName]=useState("");
    const [pokemonTipes, setPokemonTipes]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
     axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0`)
      .then((res)=>setPokemon(res.data.results))

     axios.get(`https://pokeapi.co/api/v2/type/`)
     .then((res)=>setPokemonTipes(res.data.results))

    },[])
  console.log(pokemon);

  const seachPokemon=()=>{
     navigate(`/pokemons/${pokemonName.toLowerCase()}`)
  }

  const filterType =(e)=>{
    axios.get(e.target.value)
    .then((res)=>setPokemon(res.data.pokemon))
  }
/*--------------PAGINACION-------------------*/ 
  const [page, setPage]=useState(1);
  const pokemonPerPage=6;
  const lastIndex=page*pokemonPerPage;
  const firstIndex=lastIndex-pokemonPerPage;
  const totalPages=Math.ceil(pokemon.length / pokemonPerPage);
  const pokemonPaginated=pokemon.slice(firstIndex,lastIndex);
  
  const numberPage=[];
  for(let i=1; i<=totalPages;i++){
    numberPage.push(i);
  }
 
  const handlePageClick =(data)=>{

    console.log(data.selected+1);
    const currentPage=data.selected+1;
    setPage(currentPage)
  }

  const [loading, setLoading]=useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 3000);

    return (
      <>
      { 
      loading ?
      <div>
        <img className='pokeBallLoad' src={loadImf} alt="" />
      </div>
      :
     
       
        <div className='pokemons-conteiner'>
           <h2 className='welcome-name'>Welcome!{" "}{userName}!</h2>
         <div className='pokemon-top'>
           
        
        <input className='seach-pokemon'
         type="text" 
         placeholder='seach pokemon' 
         onChange={(e)=>setPokemonName(e.target.value)}
         /> 
      <button className='button-seach' onClick={seachPokemon}>seach</button>
        <select className='select-type' onChange={filterType} name="" id="">
         {pokemonTipes.map((type)=>(
          <option className='option-tipe' value={type.url} key={type.name}>{type.name}</option>
         ))}
        </select>
         </div>
     

        <div>
        <ReactPaginate
        className='ReactPaginate' 
         pageCount={totalPages}
         
         marginPagesDisplayed={5}
         previousLabel={ <button
          className='button-last-past' 
          onClick={()=>setPage(page-1)}
          disabled={page===1}
          >last Page</button>}
          nextLabel={ <button 
            className='button-last-past' 
           disabled={page===totalPages}
          onClick={()=>setPage(page+1)}
           >Next Page</button>}
           onPageChange ={handlePageClick}
        />
        </div>
      
                 <div className='pokemon-grid'>
              {pokemonPaginated.map((poke)=>(
              <PokemonCard 
               url={poke.url ? poke.url : poke.pokemon.url} 
               key={poke.url ? poke.url : poke.pokemon.url} 
                  />
              
                      ))}
                </div>
        </div>
        
        
        }
        </>

    );
};

export default Pokemons;