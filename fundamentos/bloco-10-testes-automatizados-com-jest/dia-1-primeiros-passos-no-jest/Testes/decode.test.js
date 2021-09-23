const decode = require('../Application/decode');

describe('Teste função decode', () => {
  it('Ao passar uma string retorna ela codificada', () => {
    expect('function').toBe(typeof decode);
    expect('hello').toBe(decode('h2ll4'));
    expect('Good Morning').toBe(decode('G44d M4rn3ng'));
    expect('Good Nigth').toBe(decode('G44d N3gth'));
    expect('aeiou').toBe(decode('12345'));
  })
})
