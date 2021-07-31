let numbers = [115, 9, 101, 19, 70, 8, 100, 2, 35, -27];
let smallNumb = numbers[0]

for (let index = 0; index < numbers.length; index+= 1 ) {
  if (numbers[index] < smallNumb) {   
  smallNumb = numbers[index]
  }
}
console.log (smallNumb) 