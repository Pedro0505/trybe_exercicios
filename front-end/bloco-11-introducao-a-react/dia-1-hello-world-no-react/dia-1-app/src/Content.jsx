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
        <ul key={e.conteudo}> 
          <li>O conteudo é: {e.conteudo}</li> 
          <li>O Status: {e.status}</li> 
          <li>O Bloco: {e.bloco}</li>
        </ul>
          )}
    </div>
    )
  }
}

export default Content 
