var vetPares = [], vetImpares = []
var numeroInformado, resto = 0

// carregando os arrays
for (let contador = 0; contador < 10; contador++){
    
    numeroInformado = parseInt(prompt("Informe um número"));
    // enquanto não informar um número diferente de zero não vai adiante
    while (numeroInformado === 0) {
        numeroInformado = parseInt(prompt("Informe um número diferente de zero"));
    }

    resto = numeroInformado%2;
    if (resto === 0){
        vetPares[contador]   = numeroInformado;
        vetImpares[contador] = 0;
    } else {
        vetPares[contador]   = 0;
        vetImpares[contador] = numeroInformado;
    }
}

// descarregando o array de nr pares
console.log("Vetor de Pares");
for (let contador = 0; contador < 10; contador++){
        console.log(vetPares[contador]);
}
// descarregando o array de nr ímpares
console.log("Vetor de Ímpares");
for (let contador = 0; contador < 10; contador++){
        console.log(vetImpares[contador]);
}
