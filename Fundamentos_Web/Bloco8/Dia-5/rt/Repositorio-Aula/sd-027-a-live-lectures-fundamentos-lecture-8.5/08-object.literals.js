// Abbreviation object literal

const response = {
    name: 'T-Challa',
    superheroName: 'Black Panther',
    slogan: 'Wakanda Forever',
    powers: 'vibranium claws'
  };
  
  
  // const createSuperhero = (name, superheroName, slogan, powers) => {
  //   return {
  //     name,
  //     superheroName,
  //     slogan,
  //     powers
  //   }
  // }

  // console.log(createSuperhero('T-Challa', 'Black Panther', 'Wakanda Forever', 'vibranium claws'));
  
// aplicando todos os conceitos da aula de hoje

const superFeatures = ['T-Challa', 'Black Panther', 'Wakanda Forever'];

const createSuperhero = (...superHero) => { // rest parameter
  const [name, superheroName, slogan, powers = "Super strength"] = superHero;
  return {
    name,
    superheroName,
    slogan,
    powers
  };
};
console.log(createSuperhero(...superFeatures)); //spread operator
  

  module.exports = { createSuperhero, response }