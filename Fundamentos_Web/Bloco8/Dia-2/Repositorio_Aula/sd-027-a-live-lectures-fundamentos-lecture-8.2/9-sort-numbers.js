const numbers = [2, 5, 7, 1, 3, 4, 9, 10, 19, 12, 93, 56, 32, 45];


function ordernar (a, b) {
 return a - b
};

numbers.sort(ordernar);

console.log(numbers);