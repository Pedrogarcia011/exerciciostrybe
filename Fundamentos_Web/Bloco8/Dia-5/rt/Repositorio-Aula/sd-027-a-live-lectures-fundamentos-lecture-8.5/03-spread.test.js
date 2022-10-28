const { printPointCoordinates, point, otherPoint } = require('./03-spread');

// const point = [1.0, 2.2, -6.6];
// const otherPoint = [0.1, 3.5, -99.6];

describe('testa a função printPointCoordinates', () => {
  test('inserindo coordenadas, é impressa a frase contendo as coordenadas inseridas', () => {
    // expect(printPointCoordinates(point[0], point[1], point[2])).toBe('Point coordinates are x = 1, y = 2.2 and z = -6.6');
    expect(printPointCoordinates(...point)).toBe('Point coordinates are x = 1, y = 2.2 and z = -6.6');
    // expect(printPointCoordinates(otherPoint[0], otherPoint[1], otherPoint[2])).toBe('Point coordinates are x = 0.1, y = 3.5 and z = -99.6');
    expect(printPointCoordinates(...otherPoint)).toBe('Point coordinates are x = 0.1, y = 3.5 and z = -99.6');
  });
});

