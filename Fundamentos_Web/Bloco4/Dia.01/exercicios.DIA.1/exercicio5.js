const xadrex = 'rei'

switch (xadrex.toLowerCase()){
    case 'peão':
        console.log('move-se sempre para frente uma casa por vez e verticalmente')
        break
    case 'torre':
        console.log('A torre movimenta livremente só não anda diagonalmente')
        break
    case 'cavalo':
        console.log('O cavalo anda sempre em L')
        break
    case 'bispo':
        console.log('Ele se movimenta livremente em número de casas e em sentido dentro de seu eixo verical')
        break
    case 'rainha':
        console.log('simplesmente não ha restrição para seus movimentos')
        break
    case 'rei':
        console.log('o objetivo do jogo e capturar o rei ele pode andar livremente porem uma casa por vez')
        break
    default:
        console.log('Erro, digitação de peca')
}