const RIGHT_ANSWERS =   ['A', 'C',   'B', 'D', 'A', 'A', 'D',   'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'C', 'D', 'A', 'D', 'B'];

const hof = (right, student, callback) => {
  const message = callback >= 7 ? `Parabéns sua nota foi ${callback} e você está acima da media o gabarito foi ${right} e suas respostas foram ${student}` : 
  `Infelizmente sua nota foi ${callback} de uma revisada novamente no conteúdo o gabarito foi ${right} e suas respostas foram ${student}`
  return message;
}

const notesGrades = () =>  {
let cont = 0;
for (let i = 0; i < RIGHT_ANSWERS.length; i += 1) {
  if (STUDENT_ANSWERS[i] === 'N.A') {
    cont += 0
  }
  else if (RIGHT_ANSWERS[i] === STUDENT_ANSWERS[i]){
    cont += 1;
  }
  else cont -= 0.5;
}
  return cont;
}
console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, notesGrades()))
