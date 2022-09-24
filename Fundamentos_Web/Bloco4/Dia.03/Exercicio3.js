/*Utilize a estrutura de repetição for para escrever 
dois algoritmos: um que retorne a maior palavra desse
array e outro que retorne a menor. Considere o número
  de caracteres de cada palavra.*/

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = ''
let menorPalavra = ''

for(let index=0; index < array.length; index ++){
    if(maiorPalavra.length < array[index].length){
        maiorPalavra = array[index];
    };
}
console.log(maiorPalavra)

//---------------------------------------------------------------------

//menor Palavra

menorPalavra = maiorPalavra;

for(let index=0; index < array.length; index++){
    if(menorPalavra.length > array[index].length){
        menorPalavra = array[index]
    }
}
console.log(menorPalavra);
