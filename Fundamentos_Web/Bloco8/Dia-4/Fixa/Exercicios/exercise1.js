const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
//LEMBRE-SE SEMPRE O acc VAI FICAR NA POSIÇÃO 0, E curr FICA NA POSIÇÃO 1 
//ENTÃO SE ACC E 0 E CURR E 1, MINHA POSIÇÃO INICIAL QUE COLOQUEI E UMA ARRAY ENTÃO SENDO ASSIM O ACC NA PRIMEIRA ITERAÇÃO VAI SER MEU ARRAY QUE ADICIONEI, SENDO ASSIM POSSO ADICIONAR UM forEach COM UM PARAMETRO E DEPOIS DA O PUSH DO ACC DENTRO DESTE PARAMETRO.


const flatten = arrays.reduce( (acc, curr) => {
  curr.forEach ( (array) => {
    acc.push(array)
  })
  return acc;
}, [])

console.log(flatten);