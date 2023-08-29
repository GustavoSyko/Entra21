/*
 Escreva um algoritmo que solicite ao usuário a entrada de 5 números,
 e que exiba o somatório desses números na tela. Após exibir a soma,
 o programa deve mostrar também os números que o usuário digitou, um por linha.
*/

var vetorNumeros = []
var numeros = parseInt()


for (let i = 0; i < 5; i++) {
    vetorNumeros[i] = parseInt(prompt('Insira os números. '));
    for (let i = 0; i < vetorNumeros.length; i++) {
        soma += vetorNumeros[i];
      }
    
}

window.alert(numeros)