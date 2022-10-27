const users = [
  { firstName: 'Homer', lastName: 'Simpson', canDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', canDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', canDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', canDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', canDriver: false },
];

// Imprimir a primeira pessoa usuária que não pode dirigir
const primeiroNaoPodeDirigir = (array) => {
  return array.find((user) => {
    return user.firstName === false;
  });
};
primeiroNaoPodeDirigir(users);



// Refatorar
// const primeiroQueNaoPodeDirigir = array => {
//   const result = array.find( (user) => user.canDriver === false )

//   return result.firstName;
// }

// Refatorar - parte 2
// const primeiroQueNaoPodeDirigir = array => {
//   const result = array.find( (user) => user.canDriver === false ).firstName;

//   return result;
// }

// Refatorar - parte 3
// const primeiroQueNaoPodeDirigir = array => {
//   return array.find( (user) => user.canDriver === false ).firstName;
// }

// Refatorar - parte 4
const primeiroQueNaoPodeDirigir = array => array.find( (user) => user.canDriver === false ).firstName;

console.log(primeiroQueNaoPodeDirigir(users));