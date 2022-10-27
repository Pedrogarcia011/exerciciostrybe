const pizzas = [
  { flavor: 'Frango com Catupiry', price: 18.7},
  { flavor: 'Marguerita', price: 13 },
  { flavor: 'Gratinada', price: 15 },
  { flavor: 'Quatro Queijos', price: 13 }
];

 const verificValue = (array) => {
  return array.some((pizza) => {
    return pizza.price < 13;
  })
 };
 console.log(verificValue(pizzas));

// Usando SOME
// const verificaValores = (array) => {
//   const result = array.some( (elemento) => {
//     return elemento.price < 13;
//   } )
//
//   return result;
// }
// Refatorando - parte 1
// const verificaValores = (array) => {
//   return array.some( (elemento) => {
//     return elemento.price < 13;
//   } )
// }

// Refatorando - parte 2
// const verificaValores = (array) => {
//   return array.some( (elemento) => elemento.price < 13 )
// }

// Refatorando - parte 3
//const verificaValores = (array) => array.some( (elemento) => elemento.price < 13 )

