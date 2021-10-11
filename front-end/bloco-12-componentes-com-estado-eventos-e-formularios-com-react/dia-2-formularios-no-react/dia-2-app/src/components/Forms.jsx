import React, { Component } from "react";
import data from './DataStates'
import './style/formstyle.css'
import Selected from "./formComponets/Selected";

class Form extends Component {
  constructor() {
    super () 
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      states: data[0],
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  removeEspecialChar = (e) => {
    const exp = /[0-9a-zA-Z ]/gi
    if(!exp.test(e.key))
    e.preventDefault();
  }

  Teste = ({ target }) => {
    const exp = /^\d/gi
    if(exp.test(target.value)) {
      target.value = ''
    }
  }

  render() {
    return (
      <form>
        <fieldset id="fild">
          <label htmlFor="input-name" required > Coloque seu nome aqui:
            <input
              type="text" 
              name="name" 
              id="input-name" 
              maxLength="40" 
              onChange={ this.handleChange } 
            />
          </label>
          <label htmlFor="input-email" required > Email:
            <input
              type="text" 
              name="email" 
              id="input-email"
              onChange={ this.handleChange } 
            />
          </label>
          <label htmlFor="input-cpf" required > CPF:
            <input
              type="text" 
              name="cpf" 
              id="input-cpf"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-address" required > Endereço:
            <input
              type="text"
              name="address"
              id="input-address"
              onChange={ this.handleChange }
              onKeyPress={ this.removeEspecialChar }
            />
          </label>
          <label htmlFor="input-city" required > Cidade:
            <input
              type="text" 
              name="city" 
              id="input-city"
              onChange={ this.handleChange }
              onBlur= { this.Teste }
            />
          </label>
          <label htmlFor="option-state" required > Selecione seu estado
            <Selected statesData={ data } funcHandle={ this.handleChange } keyState={ this.state.states } />
          </label>
        </fieldset>
      </form>
    )
  }
}

export default Form
