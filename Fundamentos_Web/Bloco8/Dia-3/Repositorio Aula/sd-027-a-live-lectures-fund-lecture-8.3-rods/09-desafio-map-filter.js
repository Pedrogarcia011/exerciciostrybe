const states = [
  { short: "PA", name: "Pará" },
  { short: "TO", name: "Tocantins" },
  { short: "MG", name: "Minas Gerais" },
  { short: "BA", name: "Bahia" },
  { short: "AM", name: "Amazonas" },
  { short: "PR", name: "Paraná" },
  { short: "SP", name: "São Paulo" },
  { short: "RN", name: "Rio Grande do Norte" },
  { short: "CE", name: "Ceará" }
];

const regions = [
  { short: "N", name: "Norte" },
  { short: "NE", name: "Nordeste" },
  { short: "CW", name: "Centroeste" },
  { short: "SE", name: "Sudeste" },
  { short: "S", name: "Sul" },
];

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

// Transforme (Mapeie) o array de objeto cities em um array de objetos do seguinte formado:
// {
//   state: "Amazonas",
//   city: "Manaus",
//   region: "Norte"
// }

// Retornar um array SOMENTE com os objetos de cidades de determinada região

// Parte 1
// const arrayCities = (arrayCities, arrayStates, arrayRegions) => {
//   const result = arrayCities.map( (cidade) => { 
//     const findState = arrayStates.find( (state) => state.short === cidade.state )
//     const findRegion = arrayRegions.find( (region) => region.short === cidade.region )
    
//     return {
//         state: findState.name,
//         city: cidade.name,
//         region: findRegion.name
//       }
//   } )

//   return result;
// }

// console.log(arrayCities(cities, states, regions));

// Parte 2: passamos por parâmetro também a região que queremos
// const arrayCities = (arrayCities, arrayStates, arrayRegions, myRegion) => {
//   const result = arrayCities.map( (cidade) => { 
//     const findState = arrayStates.find( (state) => state.short === cidade.state )
//     const findRegion = arrayRegions.find( (region) => region.short === cidade.region )
    
//     return {
//         state: findState.name,
//         city: cidade.name,
//         region: findRegion.name
//       }
//   } )

//   return result.filter( (elemento) => {
//     return elemento.region === myRegion;
//   } );
// }

// Refatorando - parte 1: podemos substituir a const result pelo return e já aplicar o filter
// const arrayCities = (arrayCities, arrayStates, arrayRegions, myRegion) => {
//   return arrayCities.map( (cidade) => { 
//     const findState = arrayStates.find( (state) => state.short === cidade.state )
//     const findRegion = arrayRegions.find( (region) => region.short === cidade.region )
    
//     return {
//         state: findState.name,
//         city: cidade.name,
//         region: findRegion.name
//       }
//   } ).filter( (elemento) => {
//     return elemento.region === myRegion;
//   } );
// }

// Refatorando - parte 2
const arrayCities = (arrayCities, arrayStates, arrayRegions, myRegion) => {
  return arrayCities.map( (cidade) => { 
    const findState = arrayStates.find( (state) => state.short === cidade.state )
    const findRegion = arrayRegions.find( (region) => region.short === cidade.region )
    
    return {
        state: findState.name,
        city: cidade.name,
        region: findRegion.name
      }
  } ).filter( (elemento) => elemento.region === myRegion );
}


console.log(arrayCities(cities, states, regions, 'Nordeste'));
