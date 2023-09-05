var vetorNumeros = [];
/* ou
 const vetorNaoPopulado = new Array();
Ambos os exemplos acima criam um array vazio sem nenhum elemento dentro dele. 
Você pode, posteriormente, adicionar elementos a esse array usando o 
método push(), por exemplo.
*/

// vetor de numeros
// add - contador para adicionar ao vetor
// ord - contador para ordenacao do vetor
// aux - numero para guardar valor lido e comparar
var add = 0, ord = 0, aux = 0;
// entrada dos números para ordenar
for (let add=0; add < 7; add++){
    vetorNumeros[add] = parseInt(prompt("Informe o " + (add + 1) + "º número")); 
    // adiciona i nr na posicao exata do vetor baseado no valor da variável add
}
console.log("Vetor bagunçado " + vetorNumeros);

for (let add=0; add < 7; add++){
    for(let ord=add+1; ord < 7; ord++){
            if (vetorNumeros[add] > vetorNumeros[ord]) {
            aux = vetorNumeros[add];
            vetorNumeros[add] = vetorNumeros[ord];
            vetorNumeros[ord] = aux;
        }
    }
}
// mostra o vetor ordenado
console.log(vetorNumeros);   