const numbers = [1, 2, 3, 4, 5];

// Mostrar SOMENTE os números ímpares

// Usando FUNCTION
const numberImpar = (array) => {
  return array.filter( (number) => {
    return number %2 !== 0;
  })
}
console.log(numberImpar(numbers));

// sem FUNCTION

const impar = numbers.filter ( (element) => {
  return element %2 !== 0;
});
console.log(impar);


module.exports = numberImpar;