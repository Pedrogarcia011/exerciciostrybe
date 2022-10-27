const wakeUp = () => 'Acordando!!'
const coffe = () => 'Bora tomar café!!'
const goodNight = () => 'Partiu dormir!!'

const doingThings = (callback) => {
  const result = callback();
  console.log(result);
}

doingThings(wakeUp);
doingThings(coffe);
doingThings(goodNight);


