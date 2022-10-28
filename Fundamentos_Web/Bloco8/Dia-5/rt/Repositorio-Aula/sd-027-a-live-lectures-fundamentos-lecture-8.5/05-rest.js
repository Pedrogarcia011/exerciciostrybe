const dateInfo = ['1981', '7', '31', '22', '47', '12'];
// ao inserir os dados de uma data válida retorna a data formatada em DD/MM/YYYY'

const formatDate = (year, month, day, ...restDate) => { //rest param
    //'1981/7/31'
  return `${day}/${month}/${year}-${restDate.join(':')}` 
}

console.log(formatDate(...dateInfo)); //spread operator
// console.log(formatDate('1981', '7', '31', '22', '47', '12'))
module.exports = {formatDate, dateInfo}