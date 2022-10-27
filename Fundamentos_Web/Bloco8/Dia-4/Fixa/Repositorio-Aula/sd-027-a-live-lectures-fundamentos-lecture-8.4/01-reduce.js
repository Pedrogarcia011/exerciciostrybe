const numbers = [2, 3, 4, 6, 7, 12, 24];

// Somar os números e retornar o resultado

// Usando FOR
// const sum = (array) => {
//   let total = array[0];

//   for (let index = 1; index < array.length; index += 1) {
//     total += array[index];
//   }

//   return total;
// }

// arrays.hof( (array) => {} )

// Usando REDUCE ---> arrays.reduce( (acc, currValue) => {}, initialValue )
// const sum = (array) => {
//   return array.reduce( (acc, currValue) => {
//     console.log(`acc: ${acc} ----> currValue: ${currValue}`);
//     return acc + currValue;
//   }, 0 )
// }

// Refatorando
const sum = (array) => array.reduce( (acc, currValue) => acc + currValue, 0 );

console.log(sum(numbers));

module.exports = sum;