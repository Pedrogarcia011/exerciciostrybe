const { createSuperhero, response } = require('./08-object.literals');

// const response = {
//   name: 'T-Challa',
//   superheroName: 'Black Panther',
//   slogan: 'Wakanda Forever',
//   powers: 'vibranium claws'
// };
describe('testa a função createSuperhero', () => {
  test('cria o superhero Bruce Wayne', () => {
    expect(createSuperhero('T-Challa', 'Black Panther', 'Wakanda Forever', 'vibranium claws')).toEqual(response);
  });
});