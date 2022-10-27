//ARRAY A SER PERCORRIDO
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//FILTRO PARA ACHAR OS NUMEROS PARES NO ARRAY
const filterPar = (number) => {
  return number % 2 === 0;
};


//FUNÇÃO QUE VAI SOMAR OS NUMEROS PARES 
const acumulaPar = (acc, number) => {
  return acc + number ;
};


//ONDE PARA FAZER A LIGAÇÃO DO .FILTER COM A FUNÇÃO filterPar E LIGAÇÃO DA FUNÇÃO REDUCE COM A FUNÇÃO acumulaPar 
const result = (array) => {
    return array.filter(filterPar).reduce(acumulaPar)
}



//IMPRIMA A FUNÇÃO result QUE E ONDE CONTEM AS LIGAÇÕES E A FUNÇÃO numbers QUE E ONDE ESTÁ A ARRAY DE NUMEROS.
//console.log(result(numbers));



//APENAS USANDO REDUCE

//FUNÇÃO PARA SOMAR OS NUMEROS PARES.
const number = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (accumulator, number) => {
    return (number %2 === 0) ? accumulator + number : accumulator
}
const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(number)); // 152
