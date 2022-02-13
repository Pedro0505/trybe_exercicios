const readline = require('readline-sync')
  
const name = readline.question('Qual seu nome?');

const weight = readline.questionFloat('Qual seu peso?');

const height = readline.questionFloat('Qual sua altura?');

const calcImc = (h, w, callback) => {
  return callback(w / Math.pow(h, 2));
}

const message = (result) => {
  console.log(`${name} seu IMC é: ${result} `)
}

calcImc(height, weight, message);
