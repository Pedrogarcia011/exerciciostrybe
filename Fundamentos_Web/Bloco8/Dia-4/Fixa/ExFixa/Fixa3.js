//RETORNE O MAIOR NUMERO DO ARRAY

const arrayNumbers = [50, 85, -30, 3, 15];//ARRAY

                   //ACC  //CURR
const numberMaior = (max, number) => {
    return max > number ? max : number
// Se max for maior que number retorne max se não retorne number

}

const result = arrayNumbers.reduce(numberMaior);


console.log(result);