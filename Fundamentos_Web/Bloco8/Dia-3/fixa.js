const numbers = [19, 21, 30, 3, 45, 22, 15];

const verific = (array) => {
  return array.filter( (number) => {
    return number % 2 === 0;
  })
}
console.log(verific(numbers));
