/* const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
 */
/* const allLessons = Object.assign({}, {lesson1, lesson2, lesson3} )

// console.log(allLessons)

const studentsLength = () => {
let teste = Object.entries(allLessons)
console.log(teste)
for (let i = 0; i < teste.length; i += 1) { 
//console.log(i)
teste = Object.keys(teste)
//console.log(teste)
}
  return teste
}

studentsLength(); */

/* const addShift = (obj, key, value) => {
  obj[key] = value
  return obj
}

//console.log(addShift(lesson2, 'turno', 'manhã'))

const showKeys = obj => {
  return Object.entries(obj)
}

//console.log(showKeys(lesson1))

const objectLength = obj => {
  let array = Object.entries(obj).length
  return array
} 

//console.log(objectLength(lesson1))

const showValue = obj => {
  return Object.values(obj)
}

//console.log(showValue(lesson1))
 */

/* const getValueByNumber = (obj, index) => {
  let teste = Object.values(obj)
  return teste[index]
}

//console.log(getValueByNumber(lesson1, 0))


const verifyPair = (obj, key, value) => {
  let arrayObjKeys = Object.keys(obj)
  let arrayObjValue = Object.values(obj)
  if (arrayObjKeys.includes(key) && arrayObjValue.includes(value)) {
    return true;
  }
  return false
}

//console.log(verifyPair(lesson1, 'materia', 'Matemática'))
 */

const assert = require('assert');

const list1 = [1, 2, 3, 2, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');