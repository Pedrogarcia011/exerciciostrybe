const buttonEl = document.querySelector('button')
const inputEl = document.querySelector('input')
const preEl = document.querySelector('pre')
import Swal from 'sweetalert2'

buttonEl.addEventListener('click', handleClick)

async function handleClick() {
const cep = inputEl.value//Para pegar o valor do cep

try {
    const resolve = await fetch(`https://viacep.com.br/ws/${cep}/json/`)//URL API e colocar o valor digitado no input do cep dentro da url
    const data = await resolve.json();
    
    preEl.innerHTML = JSON.stringify(data);//para escrever dentro do html as informações
    return data
} catch(error) {
 Swal.fire(  error.message,
 'Não foi possivel buscar o cep',
 'error');
}

}