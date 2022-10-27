const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 3 === 0;
const verifyTwo = (number) => number % 5 === 0;

const isEven = numbers.find(verifyEven);



console.log(verifyTwo(2)); // False
console.log(verifyEven(30)); // True

