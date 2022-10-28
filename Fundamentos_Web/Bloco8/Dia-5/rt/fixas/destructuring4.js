/* podemos trocar o nome da variável ao fazermos a desestruturação: */


const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  //COM ISSO EU TROCO O NOME DE A PARA NAME, DE B PARA CLASSASSIGNED
  const { a: name, b: classAssigned, c: subject } = student;
  
  console.log(name); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática
  