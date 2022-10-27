const pizzas = [
  { flavor: 'Frango com Catupiry', price: 12.20 },
  { flavor: 'Marguerita', price: 13.50},
  { flavor: 'Gratinada', price: 15.32},
  { flavor: 'Quatro Queijos', price: 13.63 }
];

// forEach
const infoPizzas = (pizzas) => pizzas
  .forEach( (pizza) => console.log(`Exemplo forEach: A pizza de ${pizza.flavor} custa R$ ${pizza.price}`));

infoPizzas(pizzas);

console.log('-------');

// some
const precoMenorQue13 = (pizzas) => pizzas.some( (pizza) => pizza.price < 13);
console.log('Exemplo some: Existe alguma pizza com preço abaixo de R$ 13.00?', precoMenorQue13(pizzas));

console.log('-------');

// every
const todosMenoresQue16 = () => pizzas.every( (pizza) => pizza.price < 16);
console.log('Exemplo every: Todas as pizzas têm preço abaixo de R$ 16.00?', todosMenoresQue16());

console.log('-------');

// find
const primeiraMenorQue13 = () => pizzas.find( (pizza) => pizza.price < 13).flavor;
console.log('Exemplo find: Qual é a primeira pizza que possui preço abaixo de 13.00?', primeiraMenorQue13());

console.log('-------');

// sort
const comparar = (a, b) => {
  if (a.flavor > b.flavor) {
    return 1;
  }
  if (a.flavor < b.flavor) {
    return -1;
  }
  // a must be equal to b
  return 0;
};

const ordenaPizzas = pizzas.sort(comparar);

console.log('Exemplo sort: Pizzas ordenadas por sabor:', ordenaPizzas);