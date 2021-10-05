import React from "react";

const tarefas = ['Acordar', 'Escovar os dentes', 'Estudar'];

class Tascks extends React.Component {
  render() {
    return(
      <ul> 
        {tarefas.map((e) =>
          <li>{e}</li>
        )}
      </ul>
    )
  }
}

export default Tascks
