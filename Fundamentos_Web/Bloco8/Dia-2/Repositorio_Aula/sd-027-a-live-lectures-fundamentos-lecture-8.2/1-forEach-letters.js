
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j----'];//SEM UTILIZAR FUNCTIONS
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];//UTILIZANDO FUNCTIONS
//IMPRIMA CADA ELEMENTO DO ARRAY NA TELA


//sem utilizar functions
letters.forEach((letter) => {
 console.log(letter);
})

//utilizando functions
const imprima = (array)  => {
  array.forEach( (letra) => {
    console.log(letra);
})
};
imprima(letras);
