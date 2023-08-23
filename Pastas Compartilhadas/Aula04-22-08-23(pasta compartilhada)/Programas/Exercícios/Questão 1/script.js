var bairroInformado = prompt("Bairro de Entrega: ");
var taxaEntrega;
switch (bairroInformado) {
case "Garcia":
    taxaEntrega = 10.00;
    break;
case "Velha":
    taxaEntrega = 12.00;
    break;
case "Vila Nova":
    taxaEntrega = 8.00;
    break;
default:
taxaEntrega = 5.00;
}
alert("Taxa R$: " + taxaEntrega.toFixed(2));