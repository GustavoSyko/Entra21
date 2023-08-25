// Informar um saldo e valor em % de reajuste de saldo.
// Imprimir o valor do reajuste e o saldo com reajuste de 18%.
// A fórmula para encontrar o reajuste é: valorReajuste = (saldo * reajuste) / 100;

var saldo = Number.parseFloat(prompt('Informe o saldo da conta: '))
var reajuste = Number.parseInt(prompt('Informe a porcentagem (%) de reajuste: '))

valorReajuste = (saldo * reajuste) /100;

var ajustado = saldo ++, valorReajuste;

window.alert('O valor do reajuste foi de: R$ ' + valorReajuste)
window.alert('O saldo com o acréscimo do reajuste ficou: R$ ' + ajustado.toFixed(2));