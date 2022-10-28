//OBJECT DESTRUCTURING
// Extraia as informações de name e birthplace do objeto para montar uma frase!
const richestDuckInTheWorld = {
  name: 'Scrooge McDuck',
  birthplace: 'Glasgow, Scotland',
  city: 'Duckburg',
  jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur']
};

// const name = richestDuckInTheWorld.name;
// const birthplace = richestDuckInTheWorld.birthplace
const {jobs, name, birthplace} = richestDuckInTheWorld;
// console.log( `${name} from ${birthplace}`);
const [third, first, second] = jobs
// console.log(first, second, third);
console.log(third, first, second);
// console.log(richestDuckInTheWorld.name, richestDuckInTheWorld.birthplace, richestDuckInTheWorld.city, richestDuckInTheWorld.jobs);

module.exports = {name, birthplace}