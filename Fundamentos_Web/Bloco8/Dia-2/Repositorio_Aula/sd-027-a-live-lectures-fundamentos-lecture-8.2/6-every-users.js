const users = [
  { firstName: 'Homer', lastName: 'Simpson', canDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', canDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', canDriver: true },
  { firstName: 'Lisa', lastName: 'Simpson', canDriver: true },
  { firstName: 'Maggie', lastName: 'Simpson', canDriver: false },
];

// Verifica se TODOS as pessoas usuárias podem dirigir
const quemPodeDirigir = (array) => {
  return array.every ((user) => {
    return user.canDriver === true;
  })
};
console.log(quemPodeDirigir(users));

