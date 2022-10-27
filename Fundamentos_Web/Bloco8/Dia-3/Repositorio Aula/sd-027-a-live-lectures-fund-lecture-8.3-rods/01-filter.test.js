const filterImpar = require('./01-filter');

describe('The function filterOdd ', () => {
  it('is a function', () => {
    expect(typeof filterImpar).toBe('function');
  });

  it('returns an array only with odd numbers', () => {
    expect(filterImpar([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
    expect(filterImpar([10, 25, -13, 2, 9])).toEqual([25, -13, 9]);
  });
});