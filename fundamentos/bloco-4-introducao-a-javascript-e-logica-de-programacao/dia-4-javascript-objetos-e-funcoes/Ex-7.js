function maiorNumero (array) { 

let bigNumber = array[0]

for ( let index = 0; index < array.length; index += 1  ) {
  if (array[index] > bigNumber) {   
    bigNumber = array[index]
  }
}
let resultado = array.indexOf(bigNumber)
return resultado;
}

let resultadoFinal = maiorNumero([2, 3, 6, 7, 10, 1])

console.log(resultadoFinal)