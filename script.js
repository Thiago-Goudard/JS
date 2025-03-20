console.log('funcionando')
//atividade 1
/*let numero = prompt('Digite seu numero');

function verificarPar(numero){
    if (numero % 2 === 0){
        console.log('Esse numero é par');
    }else{
        console.log('Esse numero é impar');
    }
}

verificarPar(numero)*/


//atividade 2
/*let num1 = parseFloat(prompt('Digite seu 1 numero'));
let num2 = parseFloat(prompt('Digite seu 2 numero'));

function calcular(num1,num2){
    console.log('a soma é '+(num1 + num2));
    console.log('a subtração é '+(num1 - num2));
    console.log('a multiplicação é '+(num1 * num2));
    console.log('a divisão é '+(num1 / num2));    
}

calcular(num1,num2);*/

//atividade 3
/*let i = 10;

while(i > 0){
    console.log('nuemero '+(i--))
}*/

const text = prompt('Escreva uma pavavra');
function inverterTexto(text){
    return text.split('').reverse().join('');

}
const inverter = inverterTexto(text)

console.log(inverter);