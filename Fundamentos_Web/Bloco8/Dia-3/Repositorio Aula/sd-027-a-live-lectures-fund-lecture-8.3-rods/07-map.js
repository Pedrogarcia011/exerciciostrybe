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

// Segunda parte
 const arrayCities = (array) => {
   return array.map( (cidade) => { // primeira iteração ---> cidade = { state: "AM", name: "Manaus", region: "N" }
    
    const findsattes = (array) => {
      return array( (estado) => {
        return cidade.state === estado.short
      })
    }

     return {
         state: findsattes.name,
         city: cidade.name,
         region: 'findRegion.name'
       }
   } )
 }
 console.log(arrayCities(cities));

