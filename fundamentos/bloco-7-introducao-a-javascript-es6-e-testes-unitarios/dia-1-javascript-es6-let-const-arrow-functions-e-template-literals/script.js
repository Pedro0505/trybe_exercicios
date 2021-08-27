const testingScope = (escopo) => { 
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  if (escopo === true) {
    ifScope += ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`);
}
testingScope(true);


let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
const testingScope = (1 + 1 === 2) === true ? `${ifScope} ótimo, fui utilizada no escopo` : `Não devo ser utilizada fora meu escopo (else)`

console.log(testingScope)
