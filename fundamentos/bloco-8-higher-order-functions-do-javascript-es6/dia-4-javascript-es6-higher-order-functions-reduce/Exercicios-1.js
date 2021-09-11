const arrayNumbers = [8, 7, 3, -4, 5, 6]

// Solution With FOR
let bigNumber = arrayNumbers[0]

for (let i = 0; i < arrayNumbers.length; i += 1) {
  if (arrayNumbers[i] > bigNumber) {
    bigNumber = arrayNumbers[i]
  }
}

console.log(bigNumber)

// Solution With Reduce
const bigNumber = arrayNumbers.reduce((acc, element) => {
  if(acc < element)
  acc = element
  return acc
})

console.log(bigNumber)
