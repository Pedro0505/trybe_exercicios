const sum = require('../Application/sum')

describe('Teste função Sum', () => {
  it('Teste de soma de números positivos', () => {
    expect(2).toBe(sum(1, 1));
    expect(3).toBe(sum(1, 2));
    expect(4).toBe(sum(2, 2));
  })
  it('Teste de soma de números negativos', () => {
    expect(-3).toBe(sum(-1, -2));
    expect(-6).toBe(sum(-1, -5));
    expect(-2).toBe(sum(-1, -1));
  })
  it('Teste de lançamento de erro', () => {
    expect(() => { sum(1, '2') }).toThrow();
    expect(() => { sum('2', '4') }).toThrow();
    expect(() => { sum('1', 2) }).toThrow();
  })
  it('Teste de mensagem do lançamento de erro', () => {
    expect(() => { sum(1, '2') }).toThrowError(new Error('parameters must be numbers'));
    expect(() => { sum('3', '2') }).toThrowError(new Error('parameters must be numbers'));
    expect(() => { sum('1', 2) }).toThrowError(new Error('parameters must be numbers'));
  })
})
