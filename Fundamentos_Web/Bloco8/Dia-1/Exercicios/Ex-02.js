const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor(Math.random() * 5);
  return callback(myNumber, number) ? 'Parabéns você ganhou!' : 'Que pena, não desista'
};
console.log(lotteryResult(2, numberChecker));

// passe no console.log a função de numero áleatorio coloque no lugar do paramentro myNumber o numero que você quer passar e no lugar do callBack passe o numberCheck para checar se a funçao e verdadeira.