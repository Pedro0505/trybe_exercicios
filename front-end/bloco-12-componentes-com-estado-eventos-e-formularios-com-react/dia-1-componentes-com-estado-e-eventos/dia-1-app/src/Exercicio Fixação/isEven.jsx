import React from "react";

class ChangeColor extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0,
    }
  }

  handleClick = () => {
    this.setState(() => ({
      numeroDeCliques: this.state.numeroDeCliques + 1
    }))
  }

  isEven() {
    return this.state.numeroDeCliques % 2 === 0 ? 'green' : 'black';
  }

  render() {
    return (
      <div> 
        <button onClick={this.handleClick}> Clique </button> 
        <p  style={{ color: this.isEven() }}> {this.state.numeroDeCliques} </p> 
      </div>
    )
  }
}

export default ChangeColor
