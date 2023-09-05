const vetorNumeros       = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var vetorNumerosAlterado = [];
contaNumeros = 0;
salvaNumero  = 0;

for (let contaNumeros=0; contaNumeros <= 7; contaNumeros++){
    salvaNumero                        = vetorNumeros[contaNumeros]
    vetorNumerosAlterado[contaNumeros] = vetorNumeros[contaNumeros + 8]
    vetorNumerosAlterado[contaNumeros+8] = salvaNumero  
}
console.log(vetorNumeros);
console.log(vetorNumerosAlterado);