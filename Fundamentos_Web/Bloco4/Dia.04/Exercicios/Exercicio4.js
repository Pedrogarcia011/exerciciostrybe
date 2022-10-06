//Imprima os valores das chaves

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info.reccorente = 'Sim'
  for ( key in info){
    console.log(info[key]);
  }