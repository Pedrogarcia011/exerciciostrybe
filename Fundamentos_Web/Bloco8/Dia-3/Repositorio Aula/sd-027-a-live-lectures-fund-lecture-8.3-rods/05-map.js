const cities = [
  { state: "AM", name: "Manaus", region: "N" },
  { state: "PA", name: "Belém", region: "N" },
  { state: "TO", name: "Porto Nacional", region: "N" },
  { state: "MG", name: "Lavras", region: "SE" },
  { state: "BA", name: "Feira de Santana", region: "NE" },
  { state: "PR", name: "Cascavel", region: "S" },
  { state: "SP", name: "Presidente Prudente", region: "SE" },
  { state: "RN", name: "Touros", region: "NE" },
  { state: "CE", name: "Jericoacoara", region: "NE" }
];

// Transforme (Mapeie) o array de objetos cities em um array de strings com o seguinte formato:
// "${nomeDaCidade} - ${siglaDoEstado}"
// [ Manaus - AM, Belém - PA, ... ]


// Usando MAP
const citiesAndStates = (array) => {
  return array.map ( (city) => {
    return `Nome cidade: ${city.name} --> Estado: ${city.state}`
  })
}
console.log(citiesAndStates(cities));

// Usando MAP
//const citiesAndStates = (array) => array.map( (city) => `${city.name} - ${city.state}` );


// console.table(citiesAndStates(cities));
