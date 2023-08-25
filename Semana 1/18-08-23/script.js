let primeiroNumero = prompt('Digite o primeiro número: ');
let segundoNumero = prompt('Digite o segundo número: ');
let terceiroNumero = prompt('Digite o terceiro número');

// o sinal de "+" colocado no nome da variavel representa uma conversão 
// de string para Number

resultado = (+primeiroNumero + +segundoNumero) * +terceiroNumero;
document.write('Resultado : ' + resultado);