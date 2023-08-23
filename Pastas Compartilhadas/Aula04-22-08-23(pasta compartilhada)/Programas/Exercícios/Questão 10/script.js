var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));

var media = (nota1 + nota2 + nota3) / 3;

var conceito;

if (media >= 9) {
  conceito = "A";
} else if (media >= 7.5) {
  conceito = "B";
} else if (media >= 6) {
  conceito = "C";
} else if (media >= 4) {
  conceito = "D";
} else {
  conceito = "F";
}

document.write("Média:", media.toFixed(2));
document.write("Conceito:", conceito);
