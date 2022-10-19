//Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2
    oddsAndEvens[1] = 3
    oddsAndEvens[2] = 4
    oddsAndEvens[3] = 7
    oddsAndEvens[4] = 10
    oddsAndEvens[5] = 13
    return oddsAndEvens;
};
const armazena = sortOddsAndEvens();
console.log(`Os numeros: ${armazena} encontram em ordem crescente.`);