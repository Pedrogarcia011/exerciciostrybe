const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Retornar a frase épica do Shrek 🤔
// const epicPhrase = (array) => {
//   return array.reduce( (acc, currValue) => {
//     return `${acc} ${currValue}`;
//   }, 'StarWars Epic Phrase:' )
// }

// Refatorar
const epicPhrase = (array) => array
  .reduce( (acc, currValue) => `${acc} ${currValue}`, 'StarWars Epic Phrase:' )

console.log(epicPhrase(epic));

// Outra forma - join

const epicPhraseWithJoin = epic.join(' ');

console.log('StarWars Epic Phrase:', epicPhraseWithJoin);