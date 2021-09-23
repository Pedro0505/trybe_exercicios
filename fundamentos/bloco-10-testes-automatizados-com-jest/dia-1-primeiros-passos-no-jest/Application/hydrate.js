function hydrate(str) {
  let result = str.match(/\d+/g);
  const sum = result.reduce((acc, cur) => Number(acc) + Number(cur), 0);
  return sum === 1 ? `1 copo de água` : `${sum} copos de água`
}

module.exports = hydrate;
