const fs = require('fs').promises;

const NOME_DO_ARQUIVO = 'simpson.json';
const NOVO_ARQUIVO = 'simpsonFamily.json';

async function printSimpsons(data = []) {
  const newArray = data.filter((e) => e.name !== 'Nelson Muntz')
  newArray.push({ id: 'id', name: 'Meggie Simpsons' })
  await fs.writeFile(NOVO_ARQUIVO, JSON.stringify(newArray));
}

fs.readFile(NOVO_ARQUIVO, 'utf8')
  .then((data) => printSimpsons(JSON.parse(data)))
