/* Do jeito que está, quando person é passado para a função getNationality o retorno é João is undefined. Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian. */

/* const getNationality = ({ firstName, nationality= 'Brazil' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

//retorne João is Brazilian.

console.log(getNationality(person)); // Ivan is Russian
console.log(getNationality(otherPerson)); */

//COMO EU FARIA

const person = {
  firstName: 'João',
  lastName: 'Jr II',
  nationality: 'Brazil'
};

const otherPerson = {
  firstname: 'Ivan',
  lastName: 'Ivanovich',
  nationalit: 'Russian',
};

const {firstName, nationality}=person

const {firstname, nationalit}=otherPerson

console.log(`${firstName} is ${nationality}`);

console.log(`${firstname} is ${nationalit}`);
