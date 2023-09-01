/*

  Vetores
  Peça ao usuário para informar 6 números e alimente um vetor 
  Leia um vetor de elementos numéricos inteiros, calcule e mostre:

  a) A quantidade de números pares 
  b) quais os números pares 
  c) A quantidade de números ímpares 
  d) quais os números ímpares

*/

var vetorNumeros = []
var numeroPar = []
var numeroImpar = []



for (let n = 0; n < 6; n++) {
    vetorNumeros[n] = parseInt(prompt('Insira os números. '));
    if (vetorNumeros[n] % 2 == 0) {
        numeroPar.push(n)
    }

    else if (vetorNumeros[n] % 2 == 1) {
        numeroImpar.push(n)
    }

}



window.alert('A quantidade de números pares é: ' + numeroPar.length + '\nE os números são ' + numeroPar)
window.alert('A quantidade de números ímpares é: ' + numeroImpar.length + '\nE os números são ' + numeroImpar)

