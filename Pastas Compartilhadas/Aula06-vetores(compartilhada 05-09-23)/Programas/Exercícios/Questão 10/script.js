var vetNumeros = [1,2,3,4,15,20,32,45,88,102,18,8,11,17,22,75,46,29,50,1000];
var acheiNumero = false;
var numeroBusca = parseInt(prompt("Informe o número a ser pesquisado"));

for (let contador = 0; contador < 20; contador++) {
    if (numeroBusca === vetNumeros[contador]){
        document.write("Achei o número na " + (contador + 1) + "ª posição do array");
        acheiNumero = true;
    }
}
if (!acheiNumero) {
    document.write("Não consegui localizar o número informado");
}