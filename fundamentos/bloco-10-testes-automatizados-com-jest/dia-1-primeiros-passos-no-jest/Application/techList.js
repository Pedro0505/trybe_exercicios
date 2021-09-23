function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!'
  }
  const array = [];
  tech.sort();
  tech.map((techs) => {
    const obj = { tech: techs, name: name }
    array.push(obj);
  })
  return array;
}

console.log(techList([], 'Lucas'))

module.exports = techList;
