import React, { Component } from "react";
import data from './DataStates'
import './style/formstyle.css'
import Option from "./Selected";

class Form extends Component {
  constructor() {
    super () 
    this.state = {

    }
  }

  render() {
    return (
      <form>
        <fieldset id="fild">
          <label htmlFor="input-text" required > Coloque seu nome aqui:
            <input type="text" name="text" id="input-text" maxLength="40" />
          </label>
          <label htmlFor="input-email" required > Email:
            <input type="text" name="email" id="input-email" />
          </label>
          <label htmlFor="input-cpf" required > CPF:
            <input type="text" name="cpf" id="input-cpf" />
          </label>
          <label htmlFor="input-address" required > Endereço:
            <input type="text" name="address" id="input-address" />
          </label>
          <label htmlFor="input-city" required > Cidade:
            <input type="text" name="city" id="input-city" />
          </label>
          <label htmlFor="option-state" required > Selecione seu estado
              <Option states={data}/>
          </label>
        </fieldset>
      </form>
    )
  }
}

export default Form
