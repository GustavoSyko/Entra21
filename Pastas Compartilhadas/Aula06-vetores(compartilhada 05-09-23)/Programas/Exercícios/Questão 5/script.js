var vetorNumeros = [];
var resto, qtdPares = 0;
// carregando o vetor
for (let contador = 0; contador < 40; contador++) {
        vetorNumeros[contador] = contador + 1;
}
// verificando quem são os números pares e imprimindo na console

for (let contador = 0; contador < 40; contador++) {
        resto = vetorNumeros[contador]%2;
        if (resto === 0){
                qtdPares++;
                console.log(vetorNumeros[contador]);
        }
}
console.log("Foram localizados " + qtdPares + " números pares");
