// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Melancia', 'Banana', 'Caju', 'Uva', 'Acelora'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Manga', 'Goiaba', 'Articun'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));