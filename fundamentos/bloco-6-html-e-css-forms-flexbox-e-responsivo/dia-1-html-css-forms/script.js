let arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

for (let i = 0; i < arrayTextoEstado.length; i += 1) { 
  const accessIdState = document.querySelector('#states')
  const createOption = document.createElement('option')
  let listOfStates = arrayTextoEstado[i]
  let value = arrayTextoEstado[i]
  createOption.value = value
  createOption.innerText = listOfStates
  accessIdState.appendChild(createOption)
}


