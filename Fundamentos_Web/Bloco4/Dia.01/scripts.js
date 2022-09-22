let resultado = 'reprovada';//valor declarado

switch (resultado){//se resultado for = a:
    case 'aprovada'://aprovada então retorne:
        console.log ('Parabéns, você foi aprovada(o)!')//valor retornado
        break//usado apos cada linha para parar caso aquele tenha sido o resultado
    case 'lista'://se o valor for lista então retorne:
        console.log ('Você está na nossa lista de espera')//valor retornado
        break//usado para parar caso o valor tenha sido obtido
    case 'reprovada'://se o valor declarado seja reprovada entao retorne:
        console.log ('Você foi reprovada(o)')//valor retornado
        break//usado para parar caso o valor tenha sido obtido
    default://se nenhuma das opcoes tenha sido declarada entao retorne:
        console.log('Informação incorreta')//valor retornado caso a pessoa tenha escrito outra coisa que não encaixa em nenhuma das cases acima
}