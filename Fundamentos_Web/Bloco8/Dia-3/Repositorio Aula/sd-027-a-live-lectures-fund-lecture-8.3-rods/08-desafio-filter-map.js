const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
]

// Mostrar SOMENTE O NOME as pessoas que NÃO podem dirigir

// Parte 1
// const filterNaoPodeDirigir = () => {
//   const result = users.filter( (user) => {
//     return user.isDriver === false;
//   } );

//   return result;
// }

// PARTE 2
// const filterNaoPodeDirigir = () => {
//   const result = users.filter( (user) => {
//     return user.isDriver === false;
//   } );

//   return result.map( (elemento) => {
//     return elemento.firstName;
//   } );
// }

// Refatorando - parte 1: podemos substituir a const result pelo return e já aplicar o map
// const filterNaoPodeDirigir = () => {
//   return users.filter( (user) => {
//     return user.isDriver === false;
//   } ).map( (elemento) => {
//     return elemento.firstName;
//   } );
// }

// Refatorando - parte 2
// const filterNaoPodeDirigir = () => users.filter( (user) => user.isDriver === false ).map( (elemento) => elemento.firstName );

// Refatorando - parte 3: para ficar melhor escrito
const filterNaoPodeDirigir = () => users
  .filter((user) => user.isDriver === false)
  .map((elemento) => elemento.firstName);


console.log(filterNaoPodeDirigir());