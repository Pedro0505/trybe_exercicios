let numbers = [-5, -9, -101, -19, -70, -8, -100, -2, -35, -27];
let bigNumb = numbers[0]

for (let index = 0; index < numbers.length; index+= 1 ) {
  if (numbers[index] > bigNumb) {   
  bigNumb = numbers[index]
  }
}



console.log (bigNumb) 