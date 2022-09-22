const angulo1=20;
const angulo2=40;
const angulo3=120;

if (angulo1 <0 || angulo2 <0 || angulo3 <0){
    console.log ('Valor incorreto, precisa ser maior que 0')
} else if (angulo1 + angulo2 + angulo3 == 180){
    console.log ('TRUE')
} else {
    console.log ('FALSE')
}