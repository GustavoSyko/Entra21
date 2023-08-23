let primeiroNumero = prompt("Digite o primeiro número: ");
let segundoNumero = prompt("Digite o segundo número: ");
let terceiroNumero = prompt("Digite o terceiro número: ");

// o sinal de "+" colado no nome da variável representa uma conversão
// de String para Number
resultado = (+primeiroNumero + +segundoNumero) * +terceiroNumero;
document.write("Resultado : " + resultado);