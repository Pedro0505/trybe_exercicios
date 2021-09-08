const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((names) => 
{
  return names === name
})

console.log(hasName(names, 'Ana'))
