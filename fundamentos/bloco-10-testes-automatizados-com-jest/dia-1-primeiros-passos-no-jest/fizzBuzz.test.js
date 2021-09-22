const myFizzBuzz = require('./fizzBuzz');

describe('Teste função fizzBuzz', () => {
  it('Ao chamar um número divisível por 3 e 5 retorna fizzBuzz', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
    expect('fizzbuzz').toBe(myFizzBuzz(30));
    expect('fizzbuzz').toBe(myFizzBuzz(45));
  })
  it('Ao chamar um número divisível por 3 retorna fizz', () => {
    expect('fizz').toBe(myFizzBuzz(3));
    expect('fizz').toBe(myFizzBuzz(9));
    expect('fizz').toBe(myFizzBuzz(12));
  })
  it('Ao chamar um número divisível por 5 retorna fizz', () => {
    expect('buzz').toBe(myFizzBuzz(5));
    expect('buzz').toBe(myFizzBuzz(20));
    expect('buzz').toBe(myFizzBuzz(25));
  })
  it('Ao chamar um número que não seja divisível por 3 e 5 retornar o proprio número', () => {
    expect(1).toBe(myFizzBuzz(1));
    expect(2).toBe(myFizzBuzz(2));
    expect(17).toBe(myFizzBuzz(17));
  })
  it('Ao chamar um valor que não seja um número retorna false', () => {
    expect(false).toBe(myFizzBuzz('1'));
    expect(false).toBe(myFizzBuzz(true));
    expect(false).toBe(myFizzBuzz(''));
  })
})
