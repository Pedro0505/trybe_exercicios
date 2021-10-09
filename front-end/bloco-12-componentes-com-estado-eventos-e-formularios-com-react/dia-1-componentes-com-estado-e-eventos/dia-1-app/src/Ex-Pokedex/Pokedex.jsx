import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super () 
    this.state = {
      indexPoke: 0
    }
  }

  handleClick = (num) => {
    this.setState(() => ({
      indexPoke: (this.state.indexPoke + 1) % num,
    }))
  }

  render() {
    const { pokemons } = this.props
    return (
      <div className="pokedex">
        { <Pokemon key={ pokemons[this.state.indexPoke].id } pokemon={ pokemons[this.state.indexPoke] } /> }
        <button onClick={() => this.handleClick(pokemons.length)}> Proximo Pokemon </button>
      </div>
    );
  }
}

export default Pokedex;
