const {obj1, obj2, obj3} = require('../Application/compareObj');

describe('Comparar os objetos', () => {
  it('Ao chamar um número divisível por 3 e 5 retorna fizzBuzz', () => {
    expect(obj1).toStrictEqual(obj2);
    expect(obj2).toStrictEqual(obj1);
  })
})
