/*

Faça um programa que imprima a tabuada de multiplicação de um
número digitado pelo usuário Utilize a estrutura de laço de repetição

*/

var tabuada = parseInt(prompt('Informe a tabuada que deseja: '))
var qtd = parseInt(prompt('Informe até quantas vezes irá a tabuada.'))
for (i = 0; i <= qtd; i++){
    window.alert(tabuada+ ' X '+i+' = '+ tabuada*i)
}