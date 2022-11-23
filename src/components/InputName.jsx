import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { changeName } from '../store/slices/pokeName.slice';
import TrainnerImg from "../assets/414-4143864_pokemon-trainer-red-png-transparent-png.png"
import ImgText from "../assets/dialoge.png";
import RunningPikachu from "../assets/4tym (1).gif"
import pokeLogo from "../assets/pokemon-logo.png"
import Charizard from "../assets/charizard.gif"
import treeGif from "../assets/tree.gif"
import Rocks from "../assets/rocks.png"

const InputName = () => {

const [userName, setPokeName]=useState("");
const [runningPika, setRunningPika]=useState(true);

const navigate=useNavigate();
const dispatch = useDispatch();
  const enterName=()=>{
    dispatch(changeName(userName))
    navigate("/pokemons")
  }

  setTimeout(() => {
    setRunningPika(!runningPika)
  }, 200);

    return (
      <>
      <div className='background-Input'>
          
           <div className='inputName'>
           <img className='pokeLogo' src={pokeLogo} alt="" />
           <div className='text-img-cont' style={{display:"flex"}}>
               <img className='img-trainner' src={TrainnerImg} alt="" />
             <div className='text-conteiner' >
          <img className='ImgText' src={ImgText} alt="" />
          <div className='welcome-text'>
            <h2 className='welcome'>Hello rookie!</h2>
            <h3 className='welcome two'>Welcome to pokemon world!</h3>
          </div>
           </div> 
        
          </div>
          <img className='charizard' src={Charizard} alt="" />
          <div className='input-type'>

          <h2 style={{position:"initial"}} className='welcome three' >give me your name to start</h2>
          <input className='inputWrite' 
           type="text" 
           placeholder='Enter name'
           onChange={(e)=>setPokeName(e.target.value)}
           value={userName}
            />
         <button className='buttonName' onClick={enterName}><b>go!</b></button>
           </div>
           <img className='rocks' src={Rocks}alt="" />
           <img className='treeGif' src={treeGif} alt="" />
        </div>
         <img className={`running-Pikachu ${ runningPika ? " ": "running-right"}`} src={RunningPikachu} alt="" />
        
          {/*  
          
           <img className='treeGif' src={treeGif} alt="" />
           */}
      </div>
     
        
        </>
    );
};

export default InputName;