const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const EvenNumber = numbers.filter((element) => {
  let even = element % 2 === 0
  return even;
})

const sumEven = EvenNumber.reduce((acc, element) => {
  return acc + element
});

console.log(sumEven)
