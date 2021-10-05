import React from "react";

const tarefas = ['Acordar', 'Escovar os dentes', 'Estudar'];

class Tascks extends React.Component {
  render() {
    return(
      <div> 
        {tarefas.map((e) =>
          <p>{e}</p>
        )}
      </div>
    )
  }
}

export default Tascks
