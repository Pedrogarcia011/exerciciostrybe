const verificErro = (value1, value2) => {
 if (!value1 || !value2){
    throw new Error ('Acho que esqueceu de um numero :)')
 }
 if (isNaN(value1) || isNaN(value2)) {
    throw new Error ('Informe dois numeros')
 }
}

function sum() {

    try {
        const value1 = document.getElementById('value1').value; // Recupera o valor do input com o id value1
        const value2 = document.getElementById('value2').value; // Recupera o valor do input com o id value2
        verificErro(value1, value2)
        const result = Number(value1) + Number(value2);
        document.getElementById('result').innerHTML = `Resultado: ${result}`
    } catch (error) {
        document.getElementById('result').innerHTML = `Erro: ${error.message}`
    } finally {
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }
  }
  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }
