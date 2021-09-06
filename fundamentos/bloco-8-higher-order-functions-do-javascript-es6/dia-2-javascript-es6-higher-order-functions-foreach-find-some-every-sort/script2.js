const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find(elemet = (num) => num % 3 === 0 && num % 5 === 0)
}

console.log(findDivisibleBy3And5())
