var num1 = parseInt(prompt("Digite o primeiro número:"));
var num2 = parseInt(prompt("Digite o segundo número:"));
var num3 = parseInt(prompt("Digite o terceiro número:"));

var maior = num1;
if (num2 > maior) {
  maior = num2;
}
if (num3 > maior) {
  maior = num3;
}

document.write("O maior número é:", maior);

