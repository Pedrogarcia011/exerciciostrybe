// SPREAD OPERATOR - Operador de espalhamento
//exiba todas as informações do array sem usar um loop

const array = ["Ana Joana", "Alberto", "Joaquim"];
// console.log(array[0], array[1], array[2]);

const result = (res) => {
    return [...res]
};

console.log(result(array));