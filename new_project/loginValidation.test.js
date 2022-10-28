const {sum, sub, multi, div} = require ('./loginValidation');

describe('Requisito 1', () => {
  it ('retorne 10 quando soma (5, 5)', () =>{
    expect(sum(5, 5)).toBe(10);
  });
});

describe('Requisito 2', () => {
  it ('retorne 5 quando 10 - 5 (10, 5)', () =>{
    expect(sub(10, 5)).toBe(5);
  });
});

describe('Requisito 3', () => {
  it ('retorne 25 na multiplicação de 5 com 5', () =>{
    expect(multi(5, 5)).toBe(25);
  });
});

describe('Requisito 4', () => {
  it ('retorne 25 na divisão 50/2', () =>{
    expect(div(50, 2)).toBe(25);
  });

  it ('Erro divisão 0 com 0', () =>{
    expect(() => div(1, 0)).toThrow(Error);
  });
});