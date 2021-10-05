import React from "react";

const tarefas = ['Acordar', 'Escovar os dentes', 'Estudar'];

class Tascks extends React.Component {
  render() {
    return( 
    <div>
      {
        tarefas.map((e, i) => <ul key={i}> <li>{e}</li> </ul>)
      }
    </div>
    )
  }
}

export default Tascks
