const pizzas = [
  { flavor: 'Frango com Catupiry', price: 12.20 },
  { flavor: 'Marguerita', price: 13.50 },
  { flavor: 'Gratinada', price: 15.32 },
  { flavor: 'Quatro Queijos', price: 13.63 }
];

 //Mostrar o sabor da pizza e também o preço
 

 //com functions
 const saborPizzas = (array) => {
  array.forEach((pizza) => {
  console.log(`A pizza de ${pizza.flavor} custa somente R$ ${pizza.price}`);
  });
};
saborPizzas(pizzas);

//sem functions
pizzas.forEach((pizza) => {
  console.log(`A pizza de ${pizza.flavor} custa somente R$ ${pizza.price}`);
  });



// Refatorando
// const infoPizzas = (array) => {
//   array.forEach( (pizza) => console.log(`A pizza de ${pizza.flavor} custa R$ ${pizza.price}`) );
// }

// Refatorando - parte 2
//const infoPizzas = (array) => array
//  .forEach( (pizza) => console.log(`A pizza de ${pizza.flavor} custa R$ ${pizza.price}`) );

//infoPizzas(pizzas);