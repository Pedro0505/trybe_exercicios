const func = require('./Func');

describe('Testes da função com mock', () => {

  test('Teste da função random', () => {
    func.Random = jest.fn().mockReturnValue(10);

    expect(func.Random()).toBe(10);
    expect(func.Random).toHaveBeenCalled();
    expect(func.Random).toHaveBeenCalledTimes(1);
    expect(func.Random).toHaveBeenCalledWith()
  })
  test('Com mockImplementation', () => {
    func.Random = jest.fn().mockImplementation((a, b) => a / b)

    expect(func.Random(10, 5)).toBe(2);
    expect(func.Random).toHaveBeenCalled();
    expect(func.Random).toHaveBeenCalledTimes(1);
    expect(func.Random).toHaveBeenCalledWith(10, 5)
  })
  test('Testando a função que recebe três parametros e retorna a multiplicação', () => {
    func.Random = jest.fn().mockImplementation((a, b, c) => a * b * c)

    expect(func.Random(2, 2, 2)).toBe(8);
    expect(func.Random).toHaveBeenCalled();
    expect(func.Random).toHaveBeenCalledTimes(1);
    expect(func.Random).toHaveBeenCalledWith(2, 2, 2)
  })
  test('Testando a função que recebe um numero e retorna o dobro dele', () => {
    func.Random = jest.fn().mockImplementation((a) => a * 2);

    expect(func.Random(2)).toBe(4);
    expect(func.Random).toHaveBeenCalled();
    expect(func.Random).toHaveBeenCalledTimes(1);
    expect(func.Random).toHaveBeenCalledWith(2)
  })
  test('Teste da função que recebe uma string e retorna ela em caixa alta', () => {
    const lowerCase = jest.spyOn(func, "UpperCase").mockImplementation((str) => str.toLowerCase());
    
    expect(lowerCase('TESTE')).toBe('teste')
    expect(lowerCase).toHaveBeenCalled();
    expect(lowerCase).toHaveBeenCalledTimes(1);
    expect(lowerCase).toHaveBeenCalledWith('TESTE');
    
    func.UpperCase.mockRestore();
    expect(func.UpperCase('teste')).toBe('TESTE');
  })
  test('Teste da função que recebe uma string e retorna a primeira letra', () => {
    func.FirstLetter = jest.fn().mockImplementation((str) => str[str.length - 1]);
    
    expect(func.FirstLetter('Teste')).toBe('e');
    expect(func.FirstLetter).toHaveBeenCalled();
    expect(func.FirstLetter).toHaveBeenCalledTimes(1);
    expect(func.FirstLetter).toHaveBeenCalledWith('Teste')
  })
  test('Teste da função que recebe duas strings e retorna a concatenação delas', () => {
    func.ConcatenateStr = jest.fn().mockImplementation((a, b, c) => `${a}${b}${c}`);
    
    expect(func.ConcatenateStr('Teste', 'Teste', 'Teste')).toBe('TesteTesteTeste');
    expect(func.ConcatenateStr).toHaveBeenCalled();
    expect(func.ConcatenateStr).toHaveBeenCalledTimes(1);
    expect(func.ConcatenateStr).toHaveBeenCalledWith('Teste', 'Teste', 'Teste')
  })
})
