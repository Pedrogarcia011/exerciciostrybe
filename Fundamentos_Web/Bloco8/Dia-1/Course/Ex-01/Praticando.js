const info = [
{name:'Pedro', idade:'18'},
{name:'Olivia', idade:'19'},
{name:'Samuel', idade:'20'},
{name:'Nara', idade:'18'},
{name:'Marcela', idade:'19'},
{name:'Amaral', idade:'20'},
{name:'Maria', idade:'18'},
{name:'João', idade:'19'},
{name:'Marcelo', idade:'20'},
{name:'Zenilda', idade:'18'},
{name:'Lucia', idade:'19'},
{name:'Luciano', idade:'20'},
{name:'Adelinho', idade:'18'},
{name:'Cecilia', idade:'19'},
{name:'Adelio', idade:'20'},
];

const result = info.filter (info => info.idade === '19');
console.log(result);