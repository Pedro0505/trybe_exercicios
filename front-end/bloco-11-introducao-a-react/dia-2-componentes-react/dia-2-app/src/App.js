import React from "react";
import pokemons from "./Data";
import PokeCard from "./PokemonsCard";

class App extends React.Component {
  render() {
    return (
      <div className="containerCard">
        {pokemons.map(poke =>{
          return(
            <PokeCard data={poke} key={poke.id}/>
          )
        })}
      </div>
    );
  }
}

export default App;
