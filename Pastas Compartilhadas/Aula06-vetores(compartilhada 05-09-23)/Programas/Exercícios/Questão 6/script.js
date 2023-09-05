var vetorNumeros = [];
var resto;
// carregando o vetor
for (let contador = 0; contador < 40; contador++) {
        vetorNumeros[contador] = contador + 1;
}
// verificando quem são os números pares e imprimindo na console

for (let contador = 0; contador < 40; contador++) {
        resto = vetorNumeros[contador]%2;
        if (resto != 0){
           vetorNumeros[contador] = 0;
        }
}
console.log(vetorNumeros);
