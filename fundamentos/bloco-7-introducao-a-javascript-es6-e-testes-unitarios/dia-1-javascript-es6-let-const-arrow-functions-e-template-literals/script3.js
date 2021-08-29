const factorial = (number) => { 
let multiplication = 1;

for (let i = 1; i <= number; i += 1) {
  multiplication *= i;
  }
  return multiplication
}

console.log(factorial(5))
