const vetorNumeros   = [];
const vetorNumerosX5 = [];
contaNumeros = 0;

// entrada dos números
for (let contaNumeros=0; contaNumeros < 10; contaNumeros++){
    vetorNumeros[contaNumeros] = prompt("Informe o " + (contaNumeros + 1) + "º números"); 
    vetorNumerosX5[contaNumeros] = vetorNumeros[contaNumeros] * 5;
}

for (let contaNumeros=0; contaNumeros < 10; contaNumeros++){
    console.log(vetorNumeros[contaNumeros] + " x " + 5 + " = " + vetorNumerosX5[contaNumeros]);
}