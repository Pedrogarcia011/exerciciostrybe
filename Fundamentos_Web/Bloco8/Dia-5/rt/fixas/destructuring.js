const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

 /*  A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar do lado esquerdo entre chaves, e o objeto do lado direito: */

  const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller);