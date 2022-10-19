
const factorial = (number) => {
number > 1 ? number * factorial(number - 1) : 1;
}
console.log(factorial(5));

/*enquanto number for menor que 1 faça ? number vezes factorial e subtrai 1 de number, Se não faça : 1

Você vai colocar o valor de number dentro do console.log:
console.log factorial recebe 5
*/
