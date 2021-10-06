import React from "react";

class PokeCard extends React.Component{
  render() {
    const {data:{ name, image, id, type, averageWeight:{value, measurementUnit} }} = this.props
    return(
      <div className="card" key={id}>
        <p> {name} </p>
        <p> {type} </p>
        <p> Peso: {value} {measurementUnit} </p>
        <img src={image} alt={name} className="pokeImg" />
      </div>
    )
  }
}

export default PokeCard
