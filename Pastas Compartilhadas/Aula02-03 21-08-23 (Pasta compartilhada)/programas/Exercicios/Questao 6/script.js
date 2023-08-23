let primeiroNumero = prompt("Digite o primeiro valor inteiro: ");
let segundoNumero  = prompt("Digite o segundo valor inteiro: ");

let salvaValor = +primeiroNumero;

primeiroNumero = +segundoNumero;
segundoNumero  = +salvaValor;

document.write("Os valores trocados são: " + primeiroNumero + " e " + segundoNumero);
