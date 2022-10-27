const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
]

// Mostrar SOMENTE as pessoas que NÃO podem dirigir

const desabilitado = (array) => {
  return array.find( (user) => {
    return user.isDriver === false;
  }).firstName
};
console.log(desabilitado(users));

// Refatorando
// const filterNaoPodeDirigir = () => users.filter( (user) => user.isDriver === false )
