function menorNumero (array) {

let smallNumber = array[0]

for ( let index = 0; index < array.length; index += 1  ) {
  if (array[index] <= smallNumber) {   
    smallNumber = array[index]
  }
} 
  let resultado = array.indexOf(smallNumber)

  return resultado;
  
}

let resultadoFinal = menorNumero([1, 4, 6, 7, 10, 0, -3])

console.log(resultadoFinal)
