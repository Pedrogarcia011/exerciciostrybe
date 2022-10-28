
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
  

  const  {
    profession,
    squad,
    squadInitials
  }=jobInfos

 const job = {
    name,
    age,
    nationality
 }=user

console.log(`Ola me chamo ${name}, tenho ${age} anos, sou ${nationality}, trabalho com ${profession}`);