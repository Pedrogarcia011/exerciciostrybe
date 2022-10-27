const todos = [
    {fazendo: 'Acordando!!' },
    {fazendo: 'Bora tomar café!!' },
    {fazendo: 'Partiu dormir!!' },
]

const result = todos.filter (todos => todos.fazendo == 'Acordando!!');
console.log(result);