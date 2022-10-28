//REST PARAM
const sumAll = (...numbers) => { 
    // quando usamos os ... na declaração da função estamos utilizando o rest paramter
    let total = 0;
    numbers.forEach((number) => {
        total += number;
    });
    return total;
}

console.log(sumAll(1, 2, 3, 4, 5));


module.exports = {sumAll}
