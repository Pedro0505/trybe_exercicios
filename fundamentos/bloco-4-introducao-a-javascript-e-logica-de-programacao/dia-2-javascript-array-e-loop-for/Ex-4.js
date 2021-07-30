let numbers = [5, 5 , 5 , 5];
let soma = 0;

for ( let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index] 
}
let media = soma / numbers.length  

if ( media > 20) {
  console.log ("Valor maior que 20")
}

else if ( media == 20 ) {
  console.log ("Valor igaul a 20")
}

else  
  console.log ("Valor menor ou igual a 20")
