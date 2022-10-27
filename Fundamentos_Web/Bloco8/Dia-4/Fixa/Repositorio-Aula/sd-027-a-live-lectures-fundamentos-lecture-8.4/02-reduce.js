const numbers = [1, 2, 3, 4, 6, 7, 12, 24];

// Somar os números pares do array com reduce

// Usando IF e REDUCE
// const somaPares = (array) => {
//   return array.reduce( (acc, currValue) => {
//     console.log(`acc: ${acc} ----> currValue: ${currValue}`);
//     if (currValue % 2 === 0) {
//       return acc + currValue;
//     }
//     return acc + 0;
//   }, 0 )
// }


// Usando FILTER e REDUCE
// const somaPares = (array) => {
//   const numerosPares = array.filter( (number) => {
//     return number % 2 === 0;
//   } )
  
//   return numerosPares.reduce( (acc, currValue) => {
//     return acc + currValue;
//   }, 0 )
// }


// Refatorando
// const somaPares = (array) => {
//   const numerosPares = array.filter( (number) => number % 2 === 0 )
  
//   return numerosPares.reduce( (acc, currValue) => acc + currValue, 0 )
// }

// Refatorando - parte 2
const somaPares = (array) => array
  .filter( (number) => number % 2 === 0 )
  .reduce( (acc, currValue) => acc + currValue, 0 )


console.log(somaPares(numbers));

// console.log(numerosPares);


// Somar os números ímpares do array com reduce
const somaImpares = (array) => array
  .filter( (number) => number % 2 !== 0 )
  .reduce( (acc, currValue) => acc + currValue, 0 )


console.log(somaImpares(numbers));