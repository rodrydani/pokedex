import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pokemons from "./components/Pokemons";
import InputName from "./components/InputName";
import PokemonDetail from "./components/PokemonDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";
import loadImf from "./assets/simple_pokeball.gif";
function App() {
  const [loading, setLoading]=useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 3000);
  return (
    <>
     {
         loading ?
         <div style={{backgroundColor:"black"}}>
         
         <img className="loadImf" src={loadImf} alt="" />
         </div>
          
          
          :
   <HashRouter>
    <div className="App">
    <Routes>
        <Route path="/" element={<InputName />} />

        <Route element={<ProtectedRoutes/>}>
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/Pokemons/:id" element={<PokemonDetail />} />
        </Route>
      </Routes>
     
    </div>
    </HashRouter>
     }
     </>
  )
}

export default App
