
let sequencia = [0];
let divisao = [];

for(index = 0; index < 25; index ++){
    sequencia[index] = index + 1;
}
for (indexDiv = 0; indexDiv < sequencia.length; indexDiv++){
    divisao[indexDiv] = sequencia[indexDiv]/2;
}
console.log(divisao)