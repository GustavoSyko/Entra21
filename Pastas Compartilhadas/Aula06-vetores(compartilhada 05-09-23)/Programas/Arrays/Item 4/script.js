const vetorNumeros = [];

var numInformado = 0;
var acheiNumero = false;

// entrada dos números para ordenar
for (let posicao=0; posicao < 7; posicao++){
    vetorNumeros[posicao] = parseInt(prompt("Informe o " + (posicao + 1) + "º número")); 
    // adiciona i nr na posicao exata do vetor baseado no valor da variável add
}

numInformado = parseInt(prompt("Informe um número a ser pesquisado :"));
// iniciando a pesquisa
for (let posicao=0; posicao < 7; posicao++){
    if (vetorNumeros[posicao] == numInformado) {
        console.log("Achei o número " + numInformado + " na posição " + posicao + " do vetor");
        acheiNumero = true;
        break;    
    }
}
if (!acheiNumero) {
    console.log("Não achei no número " + numInformado + " no vetor");
}
