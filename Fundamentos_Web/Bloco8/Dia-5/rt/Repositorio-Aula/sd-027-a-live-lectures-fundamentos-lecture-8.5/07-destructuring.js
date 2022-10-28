//DEFAULT PARAM E DESTRUCTURING
// Faça uma função que receba um objeto representando um animal e retorne sua massa.

//DEFAULT PARAM
//função que recebe o nome de um usuário para fazer um saudação
//Caso um usuário não seja passado deve retornar "Hi Tryber"
const hiUser = (user = "Tryber") => {
  return `Hi! ${user}`;
};
console.log(hiUser());

const blueWhale = {
  name: 'Balaenoptera musculus',
  commonName: 'Blue whale',
  weightRange: {
    min: 45,
    max: 173,
    measurementUnit: 't'
  }
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: 350,
    max: 700
  }
};

//Lion (Panthera leo) weighs around 186.55-225 kg
const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit: 'kg'
  }
};

//'Lion (Panthera leo) weighs around 186.55-225 kg'
// const animalDescription = (animal) => {
//   const {name, commonName, weightRange} = animal;
//   return `${commonName} (${name}) weighs around ${weightRange.min}-${weightRange.max} ${weightRange.measurementUnit}`
// }

const animalDescription = ({name, commonName, weightRange:{min, max, measurementUnit = 'kg'}}) => {
  const {min, max, measurementUnit = 'kg'} = weightRange;
  return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`
}

console.log(animalDescription(polarBear));

module.exports = { animalDescription, lion, blueWhale, polarBear };