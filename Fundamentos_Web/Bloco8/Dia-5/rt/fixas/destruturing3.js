
const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  //EU QUERO ACESSAR ESSA, E ESSA PROPRIEDADE DESSE = OBJETO
  const { workDays, weekend } = daysOfWeek;
  
  console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(weekend); // ['Saturday', 'Sunday']
  

  //COM O SPREAD EU CONSIGO JUNTAR OS DOIS OBJETOS QUE SEPAREI NO CONSOLE.LOG
  const spread = [...workDays, ...weekend];
  console.log(spread);