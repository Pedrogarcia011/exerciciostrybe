let a = 10
let b = 5

function adicao(a, b){
  return (a + b)
}
console.log(adicao(a, b));

//______________________________________________

let a1 = 50
let b1 = 25

function subtracao(a1, b1){
  return (a1 - b1)
}
console.log(subtracao(a1, b1));

//___________________________________________________

let a2 = 10
let b2 = 3

function multiplicacao(qualquernome, naoinfluencia){
  return (a2 * b2)
}
console.log(multiplicacao(a2, b2));

//___________________________________________________

let a3 = 100
let b3 = 4

function Divisao(issoaqui, naotemnadahaver){
    return (a3 / b3)
}
console.log(Divisao(a3, b3));

//___________________________________________________

let a4 = 10
let b4 = 2

function Modulo(xablau, xablauzinho){
  return (a4 % b4)
}
console.log(Modulo(a4 % b4));

//__RETORNA__MAIOR_DE_2_NUMEROS_______________________

const n1 = 86
const n2 = 87

function maiorNumero(n1, n2){
    if (n1 > n2){
        console.log('maior: ', n1);
    }else if (n2 > n1){
        console.log('maior: ', n2);
    }else {
        return ('Os numeros são iguais')
    }
}
console.log(maiorNumero(n1, n2));