const myRemoveWithoutCopy = require('../Application/myRemoveWithoutCopy');

describe('Teste função myRemoveWithoutCopy', () => {
  it('Ao receber dois parametros um array de números e um número a função retorna o array sem esse número', () => {
    expect([2, 3, 4, 5]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4, 5], 1));
    expect([1, 3, 4, 5]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4, 5], 2));
    expect([1, 2, 4, 5]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4, 5], 3));
  })
  it('Teste de erro', () => {
    expect([1, 3, 4, 5]).not.toEqual(myRemoveWithoutCopy([1, 2, 3, 4, 5], 1));
    expect([1, 2, 4, 5]).not.toEqual(myRemoveWithoutCopy([1, 2, 3, 4, 5], 2));
    expect([1, 3, 4, 5]).not.toEqual(myRemoveWithoutCopy([1, 2, 3, 4, 5], 3));
  })
  it('Teste de imutabilidade do array', () => {
    const myArray = [1, 2, 3, 4, 5];
    
    const teste = () => {
    myRemoveWithoutCopy(myArray, 1);
    return myArray.length;
    }

    expect(teste()).toBe(4);
  })
})
