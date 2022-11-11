const SearchButton = document.querySelector('.search-btn');//Para capturar o botão de pesquisar
const coinInput = document.querySelector('#coin-input');//Para capturar o input
const coinsList = document.querySelector('.coins');//Para capturar a ul

function fecthAPI(coin){ //Função que vai receber a url da API
  const url = `https://api.exchangerate.host/latest?base=${coin}`
   return fetch(url)
  .then((Response) => Response.json())
  .then((data) => data.rates)
}

function handleSearch(){
    const coin = coinInput.value;//Para capturar o valor que foi digitado no input
    console.log(coin);

    fecthAPI(coin) //Chama a função e troca o parametro pelo que foi digitado no input
    .then((coin) => renderCoins(coin))
}
SearchButton.addEventListener('click', handleSearch)


function renderCoins(coins){//Função que vai fazer a lista aparecer na tela dentro da ul

    coinsList.innerHTML = '';//innerHTML define ou obtém a sintaxe HTML ou XML descrevendo os elementos descendentes.

    const coinsArray = Object.entries(coins)//Para tranformar a lista em um array
    //cria um array aninhado dos pares chave/valor de um objeto
    console.log(coinsArray);

    coinsArray.forEach((coin) => {//Para percorrer todos os coins
        const [coinName, value]=coin
        
        const li = document.createElement('li')//Para criar um elemnto html
        li.textContent = `${coinName} - ${value}`
        coinsList.appendChild(li)//Para adicionar filhos ao lu, coinsList=lu
    })
}
