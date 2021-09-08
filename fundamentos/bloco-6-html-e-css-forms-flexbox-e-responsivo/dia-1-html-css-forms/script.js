const arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

arrayTextoEstado.forEach( (element) => {
  const accessIdState = document.querySelector('#states')
  const createOption = document.createElement('option')
  let listOfStates = element
  let value = element
  createOption.value = value
  createOption.innerText = listOfStates
  accessIdState.appendChild(createOption)
})

function button(event) {
  event.preventDefault()
   const valueDate = document.getElementById('date').value.split('/', 3)
  if (valueDate == '') {
    alert('Data vazia')
  }
    else if (valueDate[0] > 31 || valueDate[0] < 0) {
      alert('Dia Inválido')
    }
    else if (valueDate[1] > 12 || valueDate[1] < 0) {
      alert('Mês Inválido')
    }
    else if (valueDate[2] < 0){ 
    alert('Ano Inválido')
    }
    else ('Data Valida') 
  }
const accessButton = document.querySelector('#submit')
accessButton.addEventListener('click', button)
