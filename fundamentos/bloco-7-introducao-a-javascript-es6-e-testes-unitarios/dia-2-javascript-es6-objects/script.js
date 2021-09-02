const createObject = (obj, key, value) => {
  obj = { }
  obj[key] = value;
  return obj
}

console.log(createObject('Pedro', 'Pedro2', 'Pedro3'))
