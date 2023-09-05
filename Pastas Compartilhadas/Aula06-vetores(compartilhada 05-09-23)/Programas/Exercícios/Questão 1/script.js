const vetorNumeros = [];
somaNumeros = 0;

// entrada dos números
for (let contaNumeros=0; contaNumeros < 5; contaNumeros++){
    vetorNumeros[contaNumeros] = parseInt(prompt("Informe o " + (contaNumeros + 1) + "º número")); 
    somaNumeros += vetorNumeros[contaNumeros];
}

console.log("A soma dos números é : " + somaNumeros);

for (let contaNumeros=0; contaNumeros < 5; contaNumeros++){
    console.log(vetorNumeros[contaNumeros]);
}