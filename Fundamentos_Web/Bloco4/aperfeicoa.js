//Comando para imprimir toda a tabuada do 7

/* let numero = 5
let soma =1
let resultado 
for(soma=1; soma<=10 ;soma++ ){
    (numero * [soma] );
    resultado = (numero * [soma] );
    console.log(resultado);
} */


//Codigo que de boas vindas para 3 pessoas

/* let pessoas = ['Pedro', 'Maria', 'Isabella']
let indice 

for(indice=0; indice < pessoas.length; indice++){
   let mensagem = 'Boas Vindas ' + pessoas[indice]
console.log(mensagem);} */


//

/*let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (index=0; index<=3; index++){
    console.log(groceryList[index]);
}*/


//PARA SABER SE UM NUMERO E PAR USANDO 
//FUNCTION:


/* function parimapa(n){
    if (n%2 == 0){
        return 'Par'
    } else{
        return 'Impar'
    }
} 

let resultado = parimapa(220)
console.log(resultado) */

//---------------------------------------------


// PARA CRIAR UMA FUNÇÃO, QUE SOMA DOIS
// NUMEROS N1 + N2-

/* function soma (n1=0, n2=0){
    return n1 + n2
}

console.log (soma(2,5)) */

//---------------------------------------------------

//TREINANDO PROJETO 1 - USANDO O OPERADOR &&

//let diaDeSol = true
//let finalDeSemana = true


function compareTrue(diaDeSol, finalDeSemana) {
    if (diaDeSol && finalDeSemana) {
        return 'true'
    } else {
        return 'false'
    }
}
console.log(compareTrue(true, true))

//TREINANDO PROJETO 2 - ÁREA DO TRIANGULO

//let base = 10
//let height = 2


function calcArea(base, height) {
    return (base * height) / 2
}

console.log(calcArea(10, 2));

//TREINANDO PROJETO 3 - DIVIDINDO A FRASE

//let nome = 'go Trybe'

function splitSentence(nome) {
    return (nome.split(' ', 2))
}
console.log(splitSentence('go Traybe'));

//TREINANDO PROJETO 4 - CONCATENAÇÃO DE STRINGS

let array = ['PRIMEIRO ITEM, ', 'GoTrybe', 'Pedro', 'ÚLTIMO ITEM']


function concatName(array){
    return (array[0] + array[array.length-1])
}
console.log(concatName(array))

//TREINANDO PROJETO 5 - PONTOS NO FUTEBOL

//let wins = 5
//let ties = 2

function footballPoints(wins, ties){
    return (wins*3 + ties*1)
}
console.log('Pontos: ' + footballPoints(5, 2));

//TREINANDO PROJETO 6 - REPETIÇÃO DO MAIOR NÚMERO
let numbers = [2,5,7,9,9,9,]

function highestCount(numbers) {
   
    let contar = 1;
    console.log(
      numbers.sort(function (a, b) {
        return b - a;
      }),
    );
    for (let i = 1; numbers[ i-1] === numbers[i]; i += 1) {
      contar += 1;
    }
    return contar;
  }
  console.log(highestCount(numbers));
  //TREINANDO PROJETO 7 - CAÇA AO RATO
  

  function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui
    if ((mouse - cat1) < (mouse - cat2)) {
      return ('cat1');
    } if ((mouse - cat1) === (mouse - cat2)) {
      return ('os gatos trombam e o rato foge');
    }
    return ('cat2');
  }
  console.log(catAndMouse(10, 8, 9));
  console.log(catAndMouse(11,10,10));
  console.log(catAndMouse(11,9,8));

  //TREINANDO PROJETO 8 - FIZZBUZZ

function fizzBuzz(array){
    let arrayStrings = []

    for(let numbers = 0; numbers < array.length; numbers +=1){
        if (array[numbers] % 3 == 0 && array[numbers] % 5 != 0){
             arrayStrings.push('fizz')
        }else if (array[numbers] % 5 == 0 && array[numbers] % 3 != 0){
             arrayStrings.push('buzz')
        }else if (array[numbers] % 5 == 0 && array[numbers] % 3 == 0){
             arrayStrings.push('fizzBuzz')
        }else{
            arrayStrings.push('bug');
        }
    }
    return(arrayStrings)
}
let result = [2, 15, 7, 9, 45]
console.log(fizzBuzz(result));

// TREINANDO PROJETO 9 - CODIFIQUE E DECODIFIQUE

function encode(codifique) {
    
      let codificado = [];
      for (let vogal of codifique) {
        if (vogal === 'a') {
          vogal = 1;
          codificado.push(vogal);
        } else if (vogal === 'e') {
          vogal = 2;
          codificado.push(vogal);
        } else if (vogal === 'i') {
          vogal = 3;
          codificado.push(vogal);
        } else if (vogal === 'o') {
          vogal = 4;
          codificado.push(vogal);
        } else if (vogal === 'u') {
          vogal = 5;
          codificado.push(vogal);
        } else {
          codificado.push(vogal);
        }
      }
      return codificado.join('');
    }
    console.log(encode('hi there'));

function decode (decodifique){
    let decodificado = [];
    for (let numeros of decodifique){
        if (numeros === '1'){
            numeros = 'a'
            decodificado.push(numeros);
        }else if (numeros === '2'){
            numeros = 'e';
            decodificado.push(numeros);
        }else if (numeros === '3'){
            numeros = 'i';
            decodificado.push(numeros);
        }else if (numeros === '4'){
            numeros = 'o';
            decodificado.push(numeros)
        }else if (numeros === '5'){
            numeros = 'u';
            decodificado.push(numeros);
        }else {
            decodificado.push(numeros)
        }
    }
    return decodificado.join('');
}
console.log (decode('h3 th2r2'));

// TREINANDO PROJETO 10 - LISTA DE TECNOLOGIAS

function techList(tech, name) {
    
    let newTechList = [];
    for (let index of tech.sort()) {
      let objetoList = {};
      objetoList['tech'] = index;
      objetoList['name'] = name;
      newTechList.push(objetoList);
    }
    if (!newTechList.length) {//informação encontrada no site cibersitemas.pt em como saber se um array está vazio usando !array.legnt para retornar um valor boleano true, caso não tenha eleementos dentro do array.
      return 'Vazio!';
    } else {
      return newTechList;
    }
  }
  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'Pedro'));
 