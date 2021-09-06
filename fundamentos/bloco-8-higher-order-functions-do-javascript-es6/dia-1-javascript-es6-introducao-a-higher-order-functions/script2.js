const generete = (name) => {
  const email = name.toLowerCase().split(' ').join('_')
  return { name , email: `${email}@trybe.com`}
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pessoa 1'), 
    id2: callback('Pessoa 2'),
    id3: callback('Pessoa 3'),
  }
  return employees;
};

console.log(newEmployees(generete))
