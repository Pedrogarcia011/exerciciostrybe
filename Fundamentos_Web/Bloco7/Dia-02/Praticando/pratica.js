
  const sum = (value1, value2) => {
    try {//Quando o codigo e executado com sucesso
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {//Quando o codigo tem algum erro
      return ('Ta errado');
    }
  };
  
  console.log(sum(2, '3'));