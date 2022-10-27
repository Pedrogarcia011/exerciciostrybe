// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Multiplica cada elemento do array por 3 e devolve um novo array com estes elementos

// usando For
// let newArray = [];

// for (let index = 0; index < numbers.length; index += 1) {
//   newArray.push(numbers[index] * 3);
// } 


// usando forEach
// let newArray = [];

// numbers.forEach( (number) => {
//   newArray.push(number * 3);
// } );

// Refatorar
// let newArray = [];

// numbers.forEach( (number) => newArray.push(number * 3) );

// console.log(newArray);

// usando função
const multiplicaNumbers = (array) => {
  let newArray = [];
  
  array.forEach( (number) => newArray.push(number * 3) );

  return newArray;
}


// console.log(multiplicaNumbers(numbers));

module.exports = multiplicaNumbers;