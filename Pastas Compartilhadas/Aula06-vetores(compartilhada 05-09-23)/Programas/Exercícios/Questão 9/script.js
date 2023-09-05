var vetPares = [], vetImpares = []
var numeroInformado, resto = 0

// carregando os arrays
for (let contador = 0; contador < 10; contador++){
    numeroInformado = parseInt(prompt("Informe um número"));
    resto = numeroInformado%2;
    if (resto === 0){
        vetPares[contador]   = numeroInformado;
        vetImpares[contador] = 0;
    } else {
        vetPares[contador]   = 0;
        vetImpares[contador] = numeroInformado;
    }
}

// descarregando os arrays
for (let contador = 0; contador < 10; contador++){
    if (vetImpares[contador] != 0) {
        console.log(vetImpares[contador]);
    } else {
        console.log(vetPares[contador]);
    }
        
}
