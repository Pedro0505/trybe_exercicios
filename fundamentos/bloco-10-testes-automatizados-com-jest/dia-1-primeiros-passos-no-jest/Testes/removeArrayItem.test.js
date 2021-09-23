const myRemove = require('../Application/removeArrayItem')

describe('Teste função myRemove', () => {
  it('Ao receber dois parametros um array de números e um número a função retorna o array sem esse número', () => {
    expect([2, 3, 4, 5]).toEqual(myRemove([1, 2, 3, 4, 5], 1));
    expect([1, 2, 4, 5]).toEqual(myRemove([1, 2, 3, 4, 5], 3));
    expect([1, 3, 4, 5]).toEqual(myRemove([1, 2, 3, 4, 5], 2));
  })
  it('Teste de erro na função', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 1));
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 2));
  })
  it('Teste de imutabilidade do array', () => {
    const myArray = [1, 2, 3, 4, 5];
    
    const teste = () => {
    myRemove(myArray, 1);
    return myArray;
    }

    expect(teste()).toEqual([1, 2, 3, 4, 5]);
  })
})
