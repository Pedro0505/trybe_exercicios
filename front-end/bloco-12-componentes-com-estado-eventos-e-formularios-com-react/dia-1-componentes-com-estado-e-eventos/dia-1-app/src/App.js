import React from 'react';
import './Ex-Pokedex/App.css';
import pokemons from './Ex-Pokedex/data';
import Pokedex from './Ex-Pokedex/Pokedex';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
