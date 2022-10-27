const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];

  const naoPodemDirigir = (array) => {
    return array.filter((pessoa) => {
        return pessoa.age < 18;
    });
  };
  console.log(naoPodemDirigir(objPeople));
  // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]
  