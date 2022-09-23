let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result=0;
let media =0;

for (index =0; index < numbers.length; index +=1){
    result = result + numbers[index];
}
media = result/numbers.length
console.log(media);
if (media > 20){
    console.log('valor maior que 20')
}else if (media <= 20){
    console.log('valor menor ou igual a 20')
}