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
           <img className='pokeLogo' src={pokeLogo} alt="" />
           <div className='inputName'>
          <div >
            <h2 className='welcome'>Hello rookie!</h2>
            <h3 className='welcome two'>Welcome to pokemon world!</h3>
             <img className='img-trainner' src={TrainnerImg} alt="" />
             <img className='ImgText' src={ImgText} alt="" />
          </div>
           <h2 style={{position:"initial"}} className='welcome' >give me your name to start</h2>
           <img className={`running-Pikachu ${ runningPika ? " ": "running-right"}`} src={RunningPikachu} alt="" />
           <img className='charizard' src={Charizard} alt="" />
           <img className='rocks' src={Rocks}alt="" />
           <img className='treeGif' src={treeGif} alt="" />
            <input className='inputWrite' 
            type="text" 
            placeholder='Enter name'
            onChange={(e)=>setPokeName(e.target.value)}
            value={userName}
            />
            <button className='buttonName' onClick={enterName}><b>go!</b></button>

        </div>
      </div>
     
        
        </>
    );
};

export default InputName;