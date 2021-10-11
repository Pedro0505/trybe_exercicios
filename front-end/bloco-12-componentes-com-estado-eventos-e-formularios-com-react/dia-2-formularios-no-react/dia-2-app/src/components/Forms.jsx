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
      residence: '',
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

  correctInput = ({ target }) => {
    const exp = /^\d/gi
    if(exp.test(target.value)) {
      target.value = ''
    }
  }

  buttonSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.buttonSubmit }>
        <fieldset id="fild">
          <label htmlFor="input-name"> Coloque seu nome aqui:
            <input
              type="text" 
              name="name" 
              id="input-name" 
              maxLength="40"
              required
              onChange={ this.handleChange }
              // onMouseEnter={() => { alert('Preencha com cuidado esta informação.')}}
            />
          </label>
          <label htmlFor="input-email"> Email:
            <input
              type="text" 
              name="email" 
              id="input-email"
              required
              onChange={ this.handleChange } 
            />
          </label>
          <label htmlFor="input-cpf"> CPF:
            <input
              type="text" 
              name="cpf" 
              id="input-cpf"
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="input-address" > Endereço:
            <input
              type="text"
              name="address"
              id="input-address"
              onChange={ this.handleChange }
              onKeyPress={ this.removeEspecialChar }
              required
            />
          </label>
          <label htmlFor="input-city" > Cidade:
            <input
              type="text" 
              name="city" 
              id="input-city"
              onChange={ this.handleChange }
              onBlur= { this.correctInput }
              required
            />
          </label>
          <label htmlFor="option-state" > Selecione seu estado
            <Selected 
              statesData={ data } 
              funcHandle={ this.handleChange }
              keyState={ this.state.states }
              required
            />
          </label>
          <label htmlFor="house" >Você mora em:
            <input
              type="radio"
              name="residence" 
              id="house"
              value="House"
              onClick={ this.handleChange }
              required
            /> Casa
          </label>
          <label htmlFor="apartament">
            <input
              type="radio"
              name="residence"
              id="apartament"
              value="Apartament"
              onClick={ this.handleChange }
              required
            /> Apartameto
          </label>
        </fieldset>
        <button type='submit'> Enviar </button>
      </form>
    )
  }
}

export default Form
