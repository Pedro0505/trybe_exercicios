let numbers = [523, 92, 32, 192, 712, 72, 102, 2, 32, 22];
let impar = 0;
 
for ( let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0 ) {
    impar += 1
    console.log ("Existe " + impar + " número ímpar")
  }
}


if (impar === 0) {
  console.log ("Não existe valor ímapar")
}

