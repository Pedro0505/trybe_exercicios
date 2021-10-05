import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render(){
    return (
    <div>
      {conteudos.map((e) =>
        <div key={e.conteudo.toString()}> 
          <p>O conteudo é: {e.conteudo}</p> 
          <p>O Status: {e.status}</p> 
          <p>O Bloco: {e.bloco}</p>
        </div>
          )}
    </div>
    )
  }
}

export default Content 
