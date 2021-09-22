const encode = require('./encode');

describe('Teste função encode', () => {
  it('Ao passar uma string retorna ela codificada', () => {
    expect('function').toBe(typeof encode);
    expect('h2ll4').toBe(encode('hello'));
    expect('G44d M4rn3ng').toBe(encode('Good Morning'));
    expect('G44d N3gth').toBe(encode('Good Nigth'));
    expect('12345').toBe(encode('aeiou'));
  })
})
