const pizzas = [
  { flavor: 'Frango com Catupiry', price: 12.20 },
  { flavor: 'Marguerita', price: 13.50 },
  { flavor: 'Gratinada', price: 16.32 },
  { flavor: 'Quatro Queijos', price: 13.63 }
];

// Retorna TRUE se todos os preços forem menores que 16.00 e FALSE e algum não satisfizer a condição
// Usando EVERY

const verificValue = (array) => {
  const result = array.every( (pizza) => {
    return pizza.price < 16;
  })
  return result;
}
console.log(verificValue(pizzas));




// const verificaValores = (array) => {
//   const result = array.every( (elemento) => {
//     return elemento.price < 16;
//   } )

//   return result;
// }

// Refatorando
// const verificaValores = (array) => {
//   return array.every( (elemento) => {
//     return elemento.price < 16;
//   } )
// }

// Refatorando - parte 2
//const verificaValores = (array) => array.every( (elemento) => elemento.price < 16 );

//console.log(verificaValores(pizzas));