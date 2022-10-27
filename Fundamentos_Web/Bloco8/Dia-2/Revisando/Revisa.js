//Multiplica cada elemnto do array por 3 e devolve um novo array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sem function
/*const newArray = []


numbers.forEach( (number) => {
  newArray.push ( number * 3)
})

console.log(newArray);*/


//Com function

const multiplicaNumbers = (array) => {
    let newArray = [];
  array.forEach ( (number) => {
    newArray.push (number * 3);
  })
  return newArray;
};
console.log(multiplicaNumbers(numbers));

