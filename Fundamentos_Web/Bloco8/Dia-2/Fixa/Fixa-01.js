const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    for (let index = 0; index < students.length; index += 1) { //criando um for que percorre toda lista 
      const student = students[index];//criando uma variavel que vai receber students na posição index do for.
      if (student.grade >= 60) {//se student.grade for maior que 60 
        student.approved = 'Aprovado';//retorno caso o student.grade seja maior que 60
      } else {//caso contrario, senão retorne.
        student.approved = 'Recuperação';//retorno caso a opção não seja verdadeira.
      }
    }
  }
  //chamando a função
  verifyGrades();
  
  console.log(students);
  

  //SEM USAR O FOREACH 

  function verifyGrades() {
    for (let index = 0; index < students.length; index += 1) { //criando um for que percorre toda lista 
      const student = students[index];//criando uma variavel que vai receber students na posição index do for.
      if (student.grade >= 60) {//se student.grade for maior que 60 
        student.approved = 'Aprovado';//retorno caso o student.grade seja maior que 60
      } else {//caso contrario, senão retorne.
        student.approved = 'Recuperação';//retorno caso a opção não seja verdadeira.
      }
    }
  } 
  // Usando forEach, é assim que você faria a mesma coisa:
  function verifyGrades() {
    students.forEach((student, index) => {
      if (student.grade >= 60) {
        students[index].approved = 'Aprovado';
      } else {
        students[index].approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  console.log(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]