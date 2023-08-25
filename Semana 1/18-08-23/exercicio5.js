// Implemente um algoritmo que receba o valor de um produto e a porcentagem de
// desconto, calcule o valor do desconto e o valor do produto com desconto. O
// valor do desconto é calculado por meio da fórmula: valor desconto = valor
// produto * (percentual do desconto /100)

var produto = Number.parseFloat(prompt('Insira o valor do produto: '));
var desconto = Number.parseFloat(prompt('Insira o desconto em porcentagem (%): '));

valorDesconto = produto * (desconto /100);

window.alert('O produto com desconto ficou: R$ ',produto --, valorDesconto)


