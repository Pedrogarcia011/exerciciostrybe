const multiplicaNumbers = require('./2-forEach-numbers');

describe('Teste da função multiplicaNumbers', () => {
  it('Testa se é função', () => {
    expect(typeof multiplicaNumbers).toBe('function');
  }); 

  it('Verifica se retorna o array com os valores multiplicados por três', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(multiplicaNumbers(numbers)).toEqual([3,  6,  9, 12, 15, 18, 21, 24, 27, 30]);
  }); 
})