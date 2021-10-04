const data = require('../data')

const searchEmployee = (id, detail) => {
  const employee = data.find(employee => employee.id === id);

  if (!employee) {
    throw new Error("ID não identificada");
  };
  if (!employee[detail]) {
    throw new Error("Informação indisponível");
  };

  return employee[detail];
};


console.log(searchEmployee('5569-4', 'George'))
